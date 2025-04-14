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

- 还是只对易错/易遗忘的点进行记录吧
    