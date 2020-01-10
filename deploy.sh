#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git pull
git add -A
git commit -m '部署github中'

# 如果发布到 https://github.com/yhj342426/yhj342426.github.io.git
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# git push -f https://github.com/yhj342426/yhj342426.github.io.git master
git push -f http://192.168.11.206:18000/yehaijun/demo.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
cd