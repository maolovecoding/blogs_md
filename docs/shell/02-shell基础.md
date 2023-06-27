# shell基础

## shell文件

以`.sh`结尾的文件是shell文件。

### 指定shell解释器

在文件开头指定：

以 `#!` 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种Shell。echo命令用于向窗口输出文本。

如下，采用 `bash`和`zsh`解释器。

```shell
#!/bin/bash
```

```shell
#!/bin/zsh
```

也可以这样指定，那么会采用系统默认的shell环境：

```shell
#!/usr/bin/env sh
```

执行shell文件：

```shell
./xxx.sh
```

执行前需要赋予该文件执行的权限：

```shell
chmod 777 xxx.sh
```

## echo & printf

### echo

echo命令可以输出：

```shell
echo abc
echo "aaaa"
```

> 注意：
>
> 单引号主要是为了原样输出，不能转义字符。而双引号可有可无。

### printf

和echo的能力基本一致，但是不会自动换行，但是可以使用转义字符，比如 '\n'.

```shell
printf aaa
printf "aaa\n"
printf 'aaa\n'
```

## read

read命令可以从输入设备读取内容。

```shell
printf "what is your name? "
read NAME # 读取输入的内容 放入变量NAME里
echo "hello $NAME!"
```

## 变量

### 变量定义

- 变量名，等号和值之间不能有空格
- 不能使用关键字
- 不能使用标点符号

```shell
a=1
b="aaaa"
c="$a cc"
echo $a
echo $b
echo $c
```

### 使用变量

- 在定义的变量前加上 `$`即可
如：

```shell
name="mao"
echo $name
echo ${name}
```

外面的花括号是可选的，如果只是使用单独的变量，不需要花括号，但是如果是还用到其他的字符或者变量，可以帮我们识别当前的变量的边界，比如这样：

```shell
name="mao"
age=22
echo "my name is ${name}, and my age is ${age}"
```

### 删除变量

使用unset关键字可以删除一个变量

```shell
name="mao"
echo ${name}
unset name
echo "拿不到 => ${name}"
```

### 变量只读

使用readonly对变量使用，可以让变量是只读的

```shell
name="mao" # 定义的时候也可以直接使用 readonly 变量
echo ${name}
name="mmm"
echo ${name}
readonly name
name="mao" # read-only variable: name
echo ${name}
```

### 特殊变量

- $0 => 脚本文件名
- $n => 执行脚本时传入的参数，$1表示第一个参数
- $@ => 传递给脚本或函数的参数个数。
- $* => 传递给脚本或函数的所有参数。
- $# => 传递给脚本或函数的所有参数。被双引号(" ")包含时，与 $* 稍有不同
- $? => 上个命令的退出状态，或函数的返回值。大部分情况成功返回0，失败返回1
- $$ => 当前Shell进程ID。对于 Shell 脚本，就是这些脚本所在的进程ID。

```shell
echo "File Name: $0"
echo "First Parameter : $1"
echo "Second Parameter : $2"
echo "Quoted Values: $@"
echo "Quoted Values: $*"
echo "Total Number of Parameters : $#"
# 运行的命令 ./01-shell基础.sh xxx aaa
```

## 数组

```sh
# arr=(1 2 3 4 5) # 或者 ：
arr=(
  11
  2
  3
  4
  5
)
echo "第二个元素为： ${arr[2]}"
echo "所有元素为： ${arr[*]}"
echo "所有元素为： ${arr[@]}"
echo "数组长度： ${#arr[@]}"
echo "数组长度： ${#arr[*]}"
echo "第一个元素的长度： ${#arr[1]}"
for val in $arr; do
  echo "this value is ${val}"
done
```

## 转义字符

```sh
转义字符 含义
\\ 反斜杠
\a 警报，响铃
\b 退格（删除键）
\f 换页(FF)，将当前位置移到下页开头
\n 换行
\r 回车
\t 水平制表符（tab键） 
\v 垂直制表符
```

shell默认是不解释转义字符的，是原样输出，可以通过 `-e`参数指定支持解释转义字符。

```shell
echo -e "aaa \n aaa \\aaa"
```

## 命令替换

命令替换是指Shell可以先执行命令，将输出结果暂时保存，在适当的地方输出。

```shell
PATH=$(pwd) # 等价于 PATH=`pwd`
echo "PATH is ${PATH}"
```

## 运算符

原生的shell环境不支持算数运算符，一般通过 `expr`来进行数学运算。注意进行运算的`变量/数字`和运算法之间需要有空格。如果是乘法 需要通过`\*`才能实现。

```shell
echo $(expr 1 + 1)
echo $(expr 1 - 1)
echo $(expr 2 \* 1)
# echo $(expr 2 * 1) // 语法错误
echo $(expr 10 / 2)
echo $(expr 10 % 3)
# 变量运算
a=10
b=20
echo $(expr $a + $b)
```

## 条件判断

### if

if条件判断
语法格式：

```shell
if [ expression ]
then
   Statement(s) to be executed if expression is true
fi

if ... fi 语句
if ... else ... fi 语句
if ... elif ... else ... fi 语句
```

例如：

```shell
a=10
b=20
if [ $a = $b ]; then
  echo "a = b"
elif [ $a -lt $b ]; then
  echo "a < b"
else
  echo "a > b"
fi
```

大于比较用 `-gt`小于用`-lt`

## for循环

```sh
for val in 1 2 3 4 5; do
  echo "this value is ${val}"
done
```

## while循环

只要条件满足，就一直执行do的代码块

```sh
a=0
while [ $a -lt 10 ]; do
  echo "a value is ${a}"
  a=$(expr $a + 1)
done
```

## 函数

使用function关键字进行声明函数，也可以不使用，直接`函数名+()`的形式声明函数也是可以的.

函数的调用就是直接使用函数名即可。
例如：

```sh
function fn1() {
  echo "fn1 ...."
}
fn2() {
  echo "fn2 ...."
}
fn1
fn2
```

如果函数没有声明返回值，也就是 `return`，那么会以最后一个语句的执行结果作为返回值。

比如函数返回一个字符串，那么我们需要使用命令替换，先拿到函数执行结果保存到一个变量里面，然后在后面就可以使用返回值。

```sh
fn3() {
  echo "fn3 ...." # 如果有变量接收 执行结果被变量保存了
}
fn3
fn3Return=$(fn3)
echo "fn3 return content ${fn3Return}"
```

### 函数参数

取参数也可以和前面的特殊变量使用形式一致。

```sh
fn1 a b c
```

那么在函数内，`$1`是第一个参数，依次内推，如果是第十个参数，那么需要通过`${10}`获取。
