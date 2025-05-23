# 🚀 Vercel 部署指南

## 📋 部署前准备

### 1. Google Analytics 设置
在部署前，请替换 `index.html` 中的 Google Analytics 追踪ID：

```html
<!-- 将 GA_MEASUREMENT_ID 替换为您的实际 Google Analytics 4 追踪ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

如何获取 Google Analytics 追踪ID：
1. 访问 [Google Analytics](https://analytics.google.com/)
2. 创建新属性或选择现有属性
3. 在"数据流"中创建"网站"数据流
4. 复制"衡量 ID"（格式：G-XXXXXXXXXX）

## 🔗 域名配置

当前配置的域名：`368chickens.online`

### 域名解析设置
在您的域名提供商处设置以下 DNS 记录：

```
类型: CNAME
名称: @（或留空）
值: cname.vercel-dns.com

类型: CNAME  
名称: www
值: cname.vercel-dns.com
```

## 📦 Vercel 部署步骤

### 方法一：GitHub 连接（推荐）

1. **将代码推送到 GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **连接 Vercel**
   - 访问 [Vercel Dashboard](https://vercel.com/dashboard)
   - 点击 "New Project"
   - 选择您的 GitHub 仓库
   - 点击 "Deploy"

3. **域名设置**
   - 部署完成后，进入项目 Settings
   - 在 "Domains" 部分添加您的自定义域名：`368chickens.online`
   - 按照提示完成 DNS 验证

### 方法二：Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录并部署**
   ```bash
   vercel login
   vercel
   ```

3. **添加自定义域名**
   ```bash
   vercel domains add 368chickens.online
   ```

## ⚙️ 配置文件说明

### vercel.json
- `cleanUrls: true` - 移除 URL 中的 .html 后缀
- `trailingSlash: false` - 不在 URL 末尾添加斜杠
- 自动重定向 `/index.html` 到 `/`
- 配置安全标头和缓存策略

### sitemap.xml
- 已更新所有 URL 为新域名
- 提交到 Google Search Console 以提高 SEO

### robots.txt
- 允许所有搜索引擎抓取
- 指向新域名的 sitemap

## 🔧 部署后检查

部署完成后，请验证以下项目：

- [ ] 网站可以通过 `https://368chickens.online` 访问
- [ ] 自动重定向 `https://368chickens.online/index.html` → `https://368chickens.online`
- [ ] Google Analytics 正常工作（可在 GA 实时报告中查看）
- [ ] 所有内部链接正常工作
- [ ] 游戏 iframe 正常加载
- [ ] SEO 元标签正确显示
- [ ] 移动端响应式设计正常

## 📊 SEO 优化建议

1. **Google Search Console**
   - 添加并验证您的网站
   - 提交 sitemap.xml
   - 监控抓取错误

2. **页面速度优化**
   - Vercel 自动提供 CDN 加速
   - 图片建议使用 WebP 格式
   - 可考虑添加 Service Worker 缓存

3. **社交媒体**
   - Open Graph 和 Twitter Cards 已配置
   - 建议创建并上传 og-image.jpg 到 `/images/` 目录

## 🆘 常见问题

**Q: 访问 index.html 会重定向到首页吗？**
A: 是的，vercel.json 中配置了自动重定向。

**Q: Google Analytics 不工作怎么办？**
A: 检查追踪ID是否正确，且域名已在 GA 中验证。

**Q: 如何更新内容？**
A: 推送到 GitHub 后，Vercel 会自动重新部署。

**Q: 自定义域名不工作？**
A: 检查 DNS 设置，可能需要 24-48 小时生效。

---

🎉 部署完成后，您的 368 Chickens 网站就可以正常访问了！ 