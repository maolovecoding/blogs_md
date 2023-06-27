#!/bin/zsh

# 忽略错误
set -e #有错误抛出错误
# 返回$1指定的git项目的当前分支(branch)或标签名(tag)
# $1 git项目源码位置,为空获则默认为当前文件夹
function current_branch() {
    local folder="$(pwd)"
    [ -n "$1" ] && folder="$1"
    local result=$(git -C "$folder" rev-parse --abbrev-ref HEAD | grep -v HEAD || git -C "$folder" describe --exact-match HEAD || git -C "$folder" rev-parse HEAD)
    echo "$result"
}
# 开发分支
branch=$(current_branch .)
printf "本次git提交代码的变更(commit)? "
read COMMITCONTENT # 提交变更 commit
# 推代码
git add .
git commit -m "${COMMITCONTENT} & deploy push md"
git push origin $branch
# 构建
rm -rf docs/.vitepress/dist
npm run docs:build #然后执行打包命令

# 进入待发布的目录
cd docs/.vitepress/dist #进到dist目录

# ------------  需要先配置电脑git连接github  -----------
git init #执行这些git命令
git remote add origin git@github.com:maolovecoding/blogs.git
git branch -m master
git add -A
git commit -m 'deploy'
git push -f git@github.com:maolovecoding/blogs.git master:gh-pages #提交到这个分支

cd -

rm -rf docs/.vitepress/dist #删除dist文件夹
