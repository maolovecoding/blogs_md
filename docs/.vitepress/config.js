
// .vitepress/config.js
import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'url'
import nav from './nav'
import sidebar from './sidebar'
const logo = fileURLToPath(new URL("/public/logo.jpeg", import.meta.url))
export default defineConfig({
  lang: 'zh-CN',
  title: 'maomao blogs',
  description: 'A blog to record what you learn and feel',
  base: '/blogs',
  themeConfig: {
    // theme-level options
    logo,
    siteTitle: '听雨少年 毛毛的博客',
    nav: nav,
    sidebar,
    search: {
      provider: 'local', // 搜索 浏览器内索引进行模糊全文搜索
    },
    footer: {
      message: 'Released under the <a href="https://github.com/maolovecoding">MIT License</a>.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/maolovecoding">mao jun</a>'
    },
    editLink: {
      pattern: 'https://github.com/maolovecoding/blogs_md/master/docs/:path'
    },
    outline: 2, // 显示标题级别
  },
  lastUpdated: true, // 最后更新时间
  // cleanUrls: true,
})