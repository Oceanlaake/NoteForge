>这里是我顺序阅读《C++ Primer》第五版时做的一些笔记。

当我们编译完成一个程序后，我们需要使用.\prog来运行，省略.\只能在这个可执行文件在PATH下的情况下

所谓 iostream library，其实分成两个type，istream和ostream，分别代表一个I/O设备的输入输出流
- 流：the charactersare generated, or consumed, **sequentially** over time.

cin等是iostream中的一种**对象**，可以理解为输入设备，而和它一起出现的>>才是属于这个对象的**方法**

endl不仅有换行符的作用，还可以强制将缓冲区内的内容直接输出到屏幕上，从而刷新缓冲区

Namespaces allow us to avoidinadvertent collisions between the names we define and uses of those same namesinside a library.

`std::cin >> x`会返回`std::cin`，所以我们可以链式进行，然而当istream的对象作为condition时，有两种false情况一种是接受的值不符合要求，另外一个是读到EOF（End-of-File）文件结束符