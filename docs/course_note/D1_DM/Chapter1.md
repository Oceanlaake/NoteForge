# **第一章:逻辑和证明**
## **1.1 命题逻辑**
- *命题(proposition)*
    - 称述性语言, 要么为真, 要么为假
- *命题变量(proposition variable)*
    - 用小写字母表示$p, q, r, s....$
- *真值(truth value)*
    - $T/F$
- *六种逻辑操作(logical operators)*
    - $\neg$ 否定(negation)
    - $\land$ 合取/且(conjunction)
    - $\lor$ 析取/或(disjunction)
    - $\oplus$ 异或(exclusive or)
    - $\rightarrow$ 蕴含(conditional)
    - $\leftrightarrow$ 双重蕴含(biconditional)
- *条件语句的等价形式*(记住这三个特殊的)
    - If $p$, then $q$
    - $p$ only if $q$
    - $q$ unless $\neg p$
- *逻辑操作的优先级*
    - 括号的优先级最高
    - $\neg$ > $\land$ > $\lor$ > $\oplus$ > $\rightarrow$ > $\leftrightarrow$
- *位运算操作*
- bitwise AND: $p \land q$
- bitwise OR: $p \lor q$
- bitwise XOR: $p \oplus q$

## **1.2 命题逻辑的应用**
- *一致的(consistent)系统规范*
    - 系统规范: 由一组命题组成的集合, 称为系统
    - 系统的一致性: 存在一组真值变量的赋值, 使得系统中每个命题都为真或为假

## 1.3 **命题等价**
- *复合命题的分类
    - 永真命题(tautology)
    - 矛盾命题(contradiction)
    - 或然命题(contigency)
- *等价命题的定义*
    - $p \leftrightarrow q$
- *常见的等价命题*
![等价命题(1)](DM_4.png)
![等价命题(2)](DM_5.png)
!!! note "如何证明两个命题逻辑等价"
    - 1 真值表相同(当命题变量较多时, 显然不够效率)
    - 2 使用等价公式
    - 如何证明不等价: 找出反例(对变量进行赋值即可)(最快且有效率)
- $p\downarrow q$ 表示NOR运算, 只有p和q均为假时整个式子才为真
    - $p\downarrow p和 \neg p$ 等价
    - $(p\downarrow q)\downarrow(p\downarrow q) 和p\lor q$ 等价
- 命题的可满足性(satisfiability)
    - 至少存在一组命题变量赋值, 使得该命题为真
    - 和consistent的区别: 单命题vs多命题

## 1.4谓词逻辑
- **谓词(predicate)**
    - 定义: 包含变量的一个陈述句, 当变量被赋值时, 只有一个真值
- **量词(quantifier)**
    - 全称量词: $\forall xP(x)$
    - 存在量词: $\exist yP(y)$
    !!! note
        - $domain\{x_1, x_2, x_3....\}$
        - $\forall xP(x) \equiv P(x_1)\land P(x_2)\land P(x_3)...$
        - $\exist xP(x) \equiv P(x_1)\lor P(x_2)\lor P(x_3)...$
    - 唯一存在量词 :$\exists_1 x$ 或 $\exists! x$
    - 量词的优先级高于逻辑操作符
- 谓词逻辑: 包含谓词与量词的命题
- 绑定变量和自由变量
- 量词的作用域: 该量词影响的表达式范围
- **De Morgan's law**
    - $\neg \forall xP(x) \equiv \exists x\neg P(x)$
    - $\neg \exists xP(x) \equiv \forall x\neg P(x)$
- 将语句转化成逻辑表达时
    - $\forall$和$\to$ , $\exist$和$\land$似乎总是对应出现
    - 一种代表的是普适规则的推出, 一种代表的是某例子身上同时包含了多种特征

## 1.5嵌套量词 
- 除非所有量词都是$\forall$或所有量词都是$\exists$, 否则量词的顺序是有意义的。
    !!! note "如何用量词方式翻译有且仅有一个"
        - 令$B(x, y)$表示x和y之间的某种联系
        - $\forall x\exists y\forall z(B(x, y)\land ((z\not =y)\to \neg B(x, z)))$
- Prenex Normal Form
    1. 将$\rightarrow$和$\leftrightarrow$转变为析取合取方式
    2. 将$\neg$移到最前面
    3. 重命名变量
    4. 将量词移到最前面
## 拓展: 命题范式
- 逻辑完备: 某组逻辑符号可以表示任意逻辑表达式
- 合取范式(CNF): 若干个子句(命题变量的析取式)的合取形式
- 析取范式(DNF): 若干个子句(命题变量的合取式)的析取形式
- minterm: 句中每个命题都出现且仅出现一次

## 推理规则
-