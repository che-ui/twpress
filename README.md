# 🚀 TWPRESS 博客框架（开发中）

[**TWPRESS**](https://twpress.mrche.top/) 的一个无服务器架构的博客框架，可以无缝部署在如 **Vercel(推荐)，Netlify，Cloudflare Pages** 这类平台。

这是一个以 Markdown 驱动的极简博客平台，可以实时编译内容，无需后台服务器、数据库或复杂配置。

---

## ✨ TWPRESS 有什么新特性？

- ✅ **无服务器架构**：由 Vercel Serverless Functions 驱动
- 🪄 **Vercel 原生支持**：无需 `server.js`，可直接与 `vercel dev` 及生产环境部署配合使用
- 📁 **/api 目录支持**：每个路由都通过 `/api/` 文件夹内的函数处理
- ⚙️ **Markdown 编译**：依然由 `marked` 提供支持，现在在无服务器环境中运行
- 💅 **相同界面，更佳体验**：主题、暗黑模式和用户体验毫不妥协

---

## 📁 项目结构

```
mdxpress-blog-cnp/
├── api/                 # 无服务器函数处理器
│   ├── index.js         # 主页渲染
│   ├── blog.js          # 博客列表路由
│   └── blog/[slug].js   # 动态博客渲染
├── public/
│   ├── blogs/           # 每篇博客的 Markdown 文件
│   ├── styles/          # 带有暗黑模式支持的 CSS
│   └── views/           # HTML 模板
├── vercel.json          # Vercel 路由和配置
├── package.json         # 元数据和依赖
└── README.md            # 本文件
```

---

## 🧪 本地运行方法

1. **克隆仓库**
   ```bash
   git clone https://github.com/che-ui/twpress
   cd TWPRESS
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **用 Vercel 本地运行**
   ```bash
   vercel dev
   ```

4. **访问应用**
   在浏览器中打开 [http://localhost:3000](http://localhost:3000)。

---

## 📌 在 Vercel 上如何运行

- 所有后端逻辑都通过 `/api` 目录下的无服务器函数处理
- 静态资源（样式、Markdown 文件）通过 `/public` 提供
- HTML 模板与渲染后的 Markdown 合并并返回为 HTML

---

## 🙋‍♂️ 关于作者

由 MRCHE.TOP 精心打造，上海初中生，致力于在 Web 应用中探索性能与简洁的平衡。

---

> 希望参与贡献、提出功能请求或报告问题？欢迎随时发邮件到1@mrche.top！

