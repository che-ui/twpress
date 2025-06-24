window.CMS_CONFIG = {
  backend: {
    name: "github",
    repo: "che-ui/twpress", // 替换为你的仓库路径
    branch: "main",
  },
  media_folder: "public/media",
  public_folder: "/media",
  collections: [
    {
      name: "blog",
      label: "博客文章",
      folder: "public/blogs",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "标题", name: "title", widget: "string" },
        { label: "发布日期", name: "date", widget: "datetime" },
        { label: "正文", name: "body", widget: "markdown" }
      ]
    }
  ]
}
window.CMS.init(window.CMS_CONFIG)
