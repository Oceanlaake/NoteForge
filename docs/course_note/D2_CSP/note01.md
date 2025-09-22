# Chapter 1: 计算机抽象及相关技术
## **seven great ideas**
    1. Use abstraction to simplify design
    2. Make the common case fast
    3. Performance via parallelism
    4. Performance via pipelining
    5. Performance via prediction
    6. Hierarchy of memories（硬盘,内存,chache in CPU,寄存器）
    7. Dependability via redundancy
## 计算机硬件
- LCD screen: mirror content of frame buffer memory（显存）一定速率读取，显示到屏幕上。

**CPU**   
- 构成： 
    - Datapath
    - Control
    - Cache memory：读取速度快，容量小，价格高（SRAM，S-静态）
- Instruction set architecture（ISA）：指令体系结构，软硬件交互接口
    - 包括复杂与精简两类

内存：DRAM，volatile（易失）

局域网，广域网

## 计算机性能
- 响应时间（运行时间，挂钟时间）
    - CPU时间
        - 用户CPU时间
        - 系统CPU时间
    - 其他操作消耗时间

- Clock period = 1/Clock Frequency
- CPU Time = Clock Period x Number of Clock Cycles = Number of Clock Cycles/Clock Frequency
- Number of Clock Cycles = Number of Instructions x CPI（Cycles Per Instruction）
    
- 吞吐率（有些情况下会影响响应时间）
- CPU主频（Clock Frequency）：CPU的时钟频率，单位是赫兹（Hz）。
- IPC（Instructions Per Cycle）：每周期指令数，即CPU每秒钟可以执行的指令数。