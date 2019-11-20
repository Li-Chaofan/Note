# 秒杀架构

秒杀是现在互联网常见的并发量巨大的场景，一直想自己写一个简单的秒杀架构的演变，加强自己，参考了很多博客和文章，如有不正确的地方请指出，感谢:yum:

![图片](https://img10.360buyimg.com/img/jfs/t27796/151/2205070659/340443/f4dbf4bd/5bfa9c1dN4d41b4a0.jpg)

## 常见场景

最典型的就是淘宝京东等电商双十一秒杀了，短时间上亿的用户涌入，瞬间流量巨大(高并发)，比如: 200万人准备在凌晨12:00准备抢购一件商品，但是商品的数量是有限的100件

这样真实能购买到该件商品的用户也只有100人及以下，不能卖超，但是从业务上来说，秒杀活动是希望更多的人来参与，也就是抢购之前希望有越来越多的人来看购买商品，但是，在抢购时间达到后，用户开始真正下单时，秒杀的服务器后端却不希望同时有几百万人同时发起抢购请求

我们都知道服务器的处理资源是有限的，所以出现峰值的时候，很容易导致服务器宕机，用户无法访问的情况出现

这就好比出行的时候存在早高峰和晚高峰的问题，为了解决这个问题，出行就有了错峰限行的解决方案

同理，在线上的秒杀等业务场景，也需要类似的解决方案，需要平安度过同时抢购带来的流量峰值的问题，这就是流量削峰的由来

## 流量削峰

削峰从本质上来说就是更多地延缓用户请求，以及层层过滤用户的访问需求，遵从**最后落地到数据库的请求数要尽量少**的原则

流量削峰主要有三种操作思路，简单说下，详细可以查看: [流量削峰](https://www.cnblogs.com/yanggb/p/11117400.html)

1. [排队](#排队)
2. [答题](#答题)
3. [分层过滤](#分层过滤)

### 排队

排队最容易想到的解决方案就是用**消息队列**来缓冲瞬时流量，把同步的直接调用转换成异步的间接推送，中间通过一个队列在一端承接瞬时的流量洪峰，在另一端平滑地将消息推送出去

在这里，**消息队列**就像**水库**一样，拦蓄上游的洪水，削减进入下游河道的洪峰流量，从而达到减免洪水灾害的目的

### 答题

答题目的其实就是延缓请求，起到对请求流量进行削峰的作用，从而让系统能够更好地支持瞬时的流量高峰

### 分层过滤

前面介绍的排队和答题，要么是在接收请求时做缓冲，要么是减少请求的同时发送，而针对秒杀场景还有一种方法，就是对请求进行分层过滤，从而过滤掉一些无效的请求，从Web层接到请求，到缓存，消息队列，最终到数据库这样就像漏斗一样，尽量把数据量和请求量一层一层地过滤和减少了

* 通过在不同的层次尽可能地过滤掉无效请求
* 通过**CDN**过滤掉大量的图片，静态资源的请求
* 再通过类似**Redis**这样的分布式缓存，过滤请求等就是典型的在上游拦截读请求

- 对写数据进行基于时间的合理分片，过滤掉过期的失效请求
- 对写请求做限流保护，将超出系统承载能力的请求过滤掉
- 涉及到的读数据不做强一致性校验，减少因为一致性校验产生瓶颈的问题
- 对写数据进行强一致性校验，只保留最后有效的数据

最终，到漏斗最末端(数据库)的才是有效请求。例如，当用户真实达到订单和支付的流程，这个是需要数据强一致性的

### 总结

1. 对于秒杀这样的高并发场景业务，最基本的原则就是将请求拦截在系统上游，降低下游压力。如果不在前端拦截很可能造成数据库读写锁冲突，甚至导致死锁，最终还有可能出现雪崩等场景
2. 划分好动静资源，静态资源使用**CDN**进行服务分发
3. 充分利用缓存，增加**QPS**，从而加大整个集群的吞吐量
4. 高峰值流量是压垮系统很重要的原因，所以需要消息队列在一端承接瞬时的流量洪峰，在另一端平滑地将消息推送出去

## 项目准备

### 表结构

这里我采用的是**MySQL**，简单的使用两个表，一个库存表，一个订单表，插入一条商品数据

```sql
--- 删除数据库
drop database seckill;
--- 创建数据库
create database seckill;
--- 使用数据库
use seckill;
--- 创建库存表
DROP TABLE IF EXISTS `t_seckill_stock`;
CREATE TABLE `t_seckill_stock` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '库存ID',
  `name` varchar(50) NOT NULL DEFAULT 'OnePlus 7 Pro' COMMENT '名称',
  `count` int(11) NOT NULL COMMENT '库存',
  `sale` int(11) NOT NULL COMMENT '已售',
  `version` int(11) NOT NULL COMMENT '乐观锁，版本号',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin COMMENT='库存表';
--- 插入一条商品，初始化50个库存
INSERT INTO `t_seckill_stock` (`count`, `sale`, `version`) VALUES ('50', '0', '0');
--- 创建库存订单表
DROP TABLE IF EXISTS `t_seckill_stock_order`;
CREATE TABLE `t_seckill_stock_order` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `stock_id` int(11) NOT NULL COMMENT '库存ID',
  `name` varchar(30) NOT NULL DEFAULT 'OnePlus 7 Pro' COMMENT '商品名称',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin COMMENT='库存订单表';
```

### 工程创建

这个自行创建即可，我创建的是一个**SpringBoot2**项目，<!-- 后续可能改为**SpringCloud**或**Dubbo**， -->然后使用**代码生成工具**: [ViewGenerator](https://github.com/dolyw/ViewGenerator)，根据表结构生成一下对应的文件，记得移除表前缀参数`t_seckill_`

![图片](https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2019/11/20191120002.png)

使用**通用Mapper**要在**Application**处加个注解`@tk.mybatis.spring.annotation.MapperScan`

```java
@SpringBootApplication
@tk.mybatis.spring.annotation.MapperScan("com.example.dao")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
```

**SpringBoot2**连接**MySQL**`url`属性要配置**serverTimezone=GMT%2B8**，`driver-class-name`属性要改为**com.mysql.cj.jdbc.Driver**

```yml
server:
    port: 8080

spring:
    datasource:
        name: SeckillEvolution
        url: jdbc:mysql://127.0.0.1:3306/seckill?serverTimezone=GMT%2B8&useSSL=false&useUnicode=true&characterEncoding=UTF-8
        username: root
        password: root
        # 使用Druid数据源
        type: com.alibaba.druid.pool.DruidDataSource
        driver-class-name: com.mysql.jdbc.Driver
        druid:
            filters: stat
            maxActive: 20
            initialSize: 1
            maxWait: 60000
            minIdle: 1
            timeBetweenEvictionRunsMillis: 60000
            minEvictableIdleTimeMillis: 300000
            validationQuery: select 'x'
            testWhileIdle: true
            testOnBorrow: false
            testOnReturn: false
            poolPreparedStatements: true
            maxOpenPreparedStatements: 20
    # 404交给异常处理器处理
    mvc:
        throw-exception-if-no-handler-found: true
    # 404交给异常处理器处理
    resources:
        add-mappings: false

mybatis:
    # Mybatis配置Mapper路径
    mapper-locations: classpath:mapper/*.xml
    # Mybatis配置Model类对应
    type-aliases-package: com.example.dto.custom

pagehelper:
    params: count=countSql
    # 指定分页插件使用哪种方言
    helper-dialect: mysql
    # 分页合理化参数 pageNum<=0时会查询第一页 pageNum>pages(超过总数时) 会查询最后一页
    reasonable: 'true'
    support-methods-arguments: 'true'

mapper:
    # 通用Mapper的insertSelective和updateByPrimaryKeySelective中是否判断字符串类型!=''
    not-empty: true

logging:
    # Debug打印SQL
    level.com.example.dao: debug
```

## 思路流程

一般的秒杀流程不外乎是这样的，这里先不考虑前端的处理

1. 用户通过前端校验最终发起请求到**Web**层，对应的代码就是**Controller**
2. 然后校验库存，扣库存，创建订单
3. 最终数据落地，持久化保存

### 传统方式

我们首先搭建一个后台服务接口，不做任何限制，使用**JMeter**，模拟100个并发线程测试，可以发现**并发事务下会出现错误**

1. 读后写的更新丢失问题?
2. 数据库性能慢的问题

### 使用乐观锁

### 使用缓存

### 使用分布式限流

### 使用队列异步下单

#### 参考

* 感谢杨冠标的流量削峰: [https://www.cnblogs.com/yanggb/p/11117400.html](https://www.cnblogs.com/yanggb/p/11117400.html)
* 感谢mikechen优知的高并发架构系列：什么是流量削峰？如何解决秒杀业务的削峰场景: [https://www.jianshu.com/p/6746140bbb76](https://www.jianshu.com/p/6746140bbb76)
* 感谢crossoverjie的SSM(十八) 秒杀架构实践: [https://crossoverjie.top/2018/05/07/ssm/SSM18-seconds-kill/](https://crossoverjie.top/2018/05/07/ssm/SSM18-seconds-kill/)
* 感谢qiurunze123的秒杀系统设计与实现: [https://github.com/qiurunze123/miaosha](https://github.com/qiurunze123/miaosha)