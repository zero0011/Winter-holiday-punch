## 快速排序的简单介绍
    算法思想 : 基于分治的思想.
    首先在数组中选取一个 基准点 , 然后分别从数组的两端扫描数组 , 设两个指示标志 (low 指向起始位置, high 指向末尾)
    首先从 后半部分开始 , 如果发现有元素比较基准点的值小, 就交换 low 和high位置的值, 然后从前半部分开始扫描 , 发现有元素大于 基准点的值,就交换 low 和 high位置的值 , 如此循环往复, 直到 low >= high， 然后把基准点的值放到 high这个位置。