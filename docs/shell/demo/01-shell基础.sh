#!/bin/zsh

# 例子1：
# printf "what is your name? "
# read NAME # 读取输入的内容
# echo "hello $NAME!"

# 例子2：
# a=1
# b="aaaa"
# c="$a cc"
# echo $a
# echo $b
# echo $c

# 例子3：
# name="mao"
# age=22
# echo "my name is ${name}, and my age is ${age}"

# 例子4：删除变量
# name="mao"
# echo ${name}
# unset name
# echo "拿不到 => ${name}"

#例子5：变量只读
# name="mao" # 定义的时候也可以直接使用 readonly 变量
# echo ${name}
# name="mmm"
# echo ${name}
# readonly name
# name="mao" # read-only variable: name
# echo ${name}

# 例子6：特殊变量
# echo "File Name: $0"
# echo "First Parameter : $1"
# echo "Second Parameter : $2"
# echo "Quoted Values: $@"
# echo "Quoted Values: $*"
# echo "Total Number of Parameters : $#"
# # 运行的命令 ./01-shell基础.sh xxx aaa

# 例子7：命令替换
# PATH=$(pwd) # 等价于 PATH=`pwd`
# echo "PATH is ${PATH}"

# 例子8：数字运算
# echo $(expr 1 + 1)
# echo $(expr 1 - 1)
# echo $(expr 2 \* 1)
# # echo $(expr 2 * 1) // 语法错误
# echo $(expr 10 / 2)
# echo $(expr 10 % 3)
# # 变量运算
# a=10
# b=20
# echo $(expr $a + $b)

# 例子9：if条件判断
# a=10
# b=20
# if [ $a = $b ]; then
#   echo "a = b"
# elif [ $a -lt $b ]; then
#   echo "a < b"
# else
#   echo "a > b"
# fi

# 例子10：for
# for val in 1 2 3 4 5; do
#   echo "this value is ${val}"
# done

# 例子11： while
# a=0
# while [ $a -lt 10 ]; do
#   echo "a value is ${a}"
#   a=$(expr $a + 1)
# done

# 例如12：数组
# # arr=(1 2 3 4 5) # 或者 ：
# arr=(
#   11
#   2
#   3
#   4
#   5
# )
# echo "第二个元素为： ${arr[2]}"
# echo "所有元素为： ${arr[*]}"
# echo "所有元素为： ${arr[@]}"
# echo "数组长度： ${#arr[@]}"
# echo "数组长度： ${#arr[*]}"
# echo "第一个元素的长度： ${#arr[1]}"
# for val in $arr; do
#   echo "this value is ${val}"
# done

# 例子12：函数
# function fn1() {
#   echo "fn1 ...."
# }
# fn2() {
#   echo "fn2 ...."
# }
# fn1
# fn2

fn3() {
  echo "fn3 ...." # 如果有变量接收 执行结果被变量保存了
}
fn3
fn3Return=$(fn3)
echo "fn3 return content ${fn3Return}"
