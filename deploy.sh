#!/usr/bin/env sh

# 忽略错误
set -e  #有错误抛出错误

# 构建
rm -rf docs/.vitepress/dist
npm run docs:build  #然后执行打包命令

# 进入待发布的目录
cd docs/.vitepress/dist  #进到dist目录

# ------------  需要先配置电脑git连接github  -----------
git init  #执行这些git命令
git remote add origin git@github.com:maolovecoding/blogs.git
git branch -m master
git add -A
git commit -m 'deploy'
git push -f git@github.com:maolovecoding/blogs.git master:gh-pages  #提交到这个分支

cd -

rm -rf docs/.vitepress/dist  #删除dist文件夹