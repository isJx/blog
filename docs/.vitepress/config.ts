import { defineConfig } from "vitepress";
export default defineConfig({
  title: "isjx",
  description: "hello world",
  base:'/blog/',

  themeConfig:{
    nav:[
      {text:'首页',link:'/'}
    ]
  }
})