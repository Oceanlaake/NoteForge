# **第六章: 计数**

## 6.2 鸽巢原理 
- 鸽巢原理用函数来解释其实就是一个满射的模型
!!! tip  "鸽巢原理(The Pigeonhole Principle)"
    If $k$ is a positive integer and $k + 1$ or more objects are placed into $k$ boxes, then there is at least one box containing two or more of the objects
!!! tip "广义鸽巢原理(The generalized Pigeonhole Principle)"    
    If $n$ objects are palced into $k$ boxes, then there is at least one box containing at least $\lceil n/k\rceil$ objects
??? note "鸽巢原理例题" 
    - [例题集1](https://www.bilibili.com/video/BV1qzB1YtEVE/?spm_id_from=333.1387.homepage.video_card.click)
    - [例题集2](https://www.bilibili.com/video/BV1VHPxebEcU/?spm_id_from=333.1387.homepage.video_card.click)
    - 来源: 时空之轮轮轮 | bilibili
!!! tip "做题小技巧"
    1. 当求证存在某段子序列长度为n+1的题型时, 分为:
        - $\exists$ 一个子序列长度为 n+1
        - $\forall$ 子序列长度为[1,n] <- 证明不能构造
    2. 鸽巢原理找非平凡矩形的临界情况: 3X7, 5X5
## 拉姆齐数
- 什么是R(m, n)?
> 拉姆齐数 R(m, n)：指最小的正整数 t，使得任意 t 个顶点的完全图 $K_t$，在边用两种颜色（如红蓝）染色后，**必定**包含一个红色的 $K_m$ 或蓝色的 $K_n$ 子图。
- R(3,3) = 6 例子
> 任意 6 个点的完全图，其边被染成红色或蓝色后，一定包含一个红色的三角形，或一个蓝色的三角形。

也可类比为：
> 在任意 6 人的聚会中，要么存在三人彼此互相认识（红色边），要么存在三人彼此互相不认识（蓝色边）。

- R(3,3) = 6 的证明(常见写法)
- Step 1: 假设图$K_6$, 任选一点v
    - v有五条边连接其他点
    - 用**鸽巢原理**：至少有 ⌈5/2⌉ = 3 条边是同一种颜色
- Step 2: 设这 3 个点为 A, B, C
    - Case 1: 任意一条边是红色, 则 v 和该两个点形成红色三角形
    - Case 2: 所有边是蓝色, A, B, C 本身构成蓝色三角形
- 得出结论, $K_6$中一定存在红色或蓝色三角形
- 如果要证6是最小的, 可以构造一个$K_5$不成立的例子