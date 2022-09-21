import { defineConfig } from "vitepress";
export default defineConfig({
  title: "isjx",
  description: "hello world",
  base:'/blog/',

  themeConfig:{
    socialLinks:[{
      icon:'github',link:'https://github.com/isJx'
  }],
  }
})