# MySql数据同步Elasticsearch

MySql数据同步Elasticsearch的方式

1. 直接通过ES的API将数据写入到ES集群中
2. 监听MySQL的Binlog，分析Binlog将数据同步到ES集群中

> 考虑到订单系统ES服务的业务特殊性，对于订单数据的实时性较高，显然监听Binlog的方式相当于异步同步，有可能会产生较大的延时性，且方案2实质上跟方案1类似，但又引入了新的系统，维护成本也增高，所以订单中心ES采用了直接通过ES的API写入订单数据的方式，该方式简洁灵活，能够很好的满足订单中心数据同步到ES的需求

> 由于ES订单数据的同步采用的是在业务中写入的方式，当新建或更新文档发生异常时，如果重试势必会影响业务正常操作的响应时间，所以每次业务操作只更新一次ES，如果发生错误或者异常，在数据库中插入一条补救任务，有Worker任务会实时地扫这些数据，以数据库订单数据为基准来再次更新ES数据。通过此种补偿机制，来保证ES数据与数据库订单数据的最终一致性

## 直接通过ES的API将数据写入到ES集群中

待补充

## 监听MySQL的Binlog，分析Binlog将数据同步到ES集群中

待补充