## 服务端
    服务端需要负责接收这些切片 , 并在接收到所有切片后合并切片
### 问题
 1. 何时合并切片 , 即什么时候传输完成
 2. 如何合并切片-

 第一个问题需要前端进行配合 , 前端在每个切片中都携带切片最大数量的信息 , 当服务端接收这个数量的切片时自动合并 , 也可以额外发一个请求主动通知服务端进行切片的合并

 第二个问题 , 具体如何合并切片呢 ? 这里可以使用 node.js 的读写流 , 将所有切片的流传输到最终文件流里


## 接收切片
    使用 multiparty 包处理前端传来的 FormData