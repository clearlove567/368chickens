# 368 Chickens 游戏网站

一个精美的游戏落地页，用于展示和运行 368 Chickens 小鸡拯救游戏。

## 🎮 项目介绍

368 Chickens 是一款有趣的益智游戏，玩家需要拯救368只可爱的小鸡。通过巧妙地排列3只小鸡来完成拯救任务，考验玩家的逻辑思维、空间想象和策略规划能力。

## ✨ 功能特性

### 🎨 设计特色
- **现代化UI设计** - 使用 TailwindCSS 构建的响应式界面
- **游戏主题风格** - 采用 Fredoka 和 Comic Neue 字体，符合游戏氛围
- **精美动画效果** - 平滑的滚动动画和交互效果
- **移动端优化** - 完全响应式设计，支持各种设备

### 🔧 技术功能
- **iframe 游戏嵌入** - 安全地嵌入原始游戏
- **全屏游戏体验** - 支持全屏模式游玩
- **加载状态管理** - 优雅的加载动画和错误处理
- **性能优化** - 懒加载、预加载和缓存策略

### 📈 SEO 优化
- **完善的元数据** - 包含 Open Graph 和 Twitter Cards
- **结构化数据** - JSON-LD 格式的游戏信息
- **语义化HTML** - 符合 Web 标准的语义化标签
- **网站地图** - 完整的 sitemap.xml
- **搜索引擎友好** - robots.txt 和 .htaccess 配置

## 🚀 快速开始

### 本地运行

1. 克隆项目到本地
```bash
git clone <repository-url>
cd 368chickens
```

2. 使用 Live Server 或任意 HTTP 服务器运行
```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js (http-server)
npx http-server

# 使用 VS Code Live Server
# 右键 index.html -> Open with Live Server
```

3. 访问 `http://localhost:8000`

### 生产部署

1. 将所有文件上传到您的网站根目录
2. 确保服务器支持 Apache (.htaccess) 或配置相应的 Nginx 规则
3. 更新所有 URL 引用为您的实际域名
4. 配置 HTTPS 证书

## 📁 文件结构

```
368chickens/
├── index.html          # 主页面
├── styles.css          # 自定义样式
├── script.js           # JavaScript 功能
├── sitemap.xml         # 网站地图
├── robots.txt          # 搜索引擎指令
├── .htaccess          # Apache 服务器配置
└── README.md          # 项目说明
```

## 🛠 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript ES6+** - 现代 JavaScript 功能
- **TailwindCSS** - 实用优先的 CSS 框架
- **Google Fonts** - Fredoka 和 Comic Neue 字体

## 🎯 SEO 优化详情

### 元数据优化
- 精心设计的标题和描述
- 完整的 Open Graph 标签
- Twitter Cards 支持
- 多语言支持 (zh-CN)

### 技术SEO
- 语义化 HTML 结构
- JSON-LD 结构化数据
- 网站地图 (sitemap.xml)
- Robots.txt 配置
- 规范化 URL

### 性能优化
- Gzip 压缩
- 浏览器缓存
- 资源预加载
- 懒加载图片
- 最小化CSS/JS

## 🔧 自定义配置

### 域名配置
更新以下文件中的域名引用：
- `index.html` - 所有 Open Graph URL
- `sitemap.xml` - 所有 URL 地址
- `.htaccess` - HTTPS 重定向规则

### 游戏iframe
修改 `index.html` 中的 iframe src 属性：
```html
<iframe src="https://your-game-url.com/" ...>
```

### 分析代码
在 `script.js` 中添加您的分析代码：
```javascript
// Google Analytics
gtag('config', 'GA_MEASUREMENT_ID');

// 其他分析工具
```

## 📱 响应式设计

网站在以下设备上进行了优化：
- 📱 手机 (320px+)
- 📱 平板 (768px+)
- 💻 桌面 (1024px+)
- 🖥️ 大屏 (1280px+)

## 🎨 设计指南

### 颜色方案
- 主色调：橙色 (#f97316)
- 背景：暖色渐变 (黄色到橙色)
- 文字：深灰色 (#374151)
- 强调：红色和绿色

### 字体
- **标题**：Fredoka (圆润可爱)
- **正文**：Comic Neue (轻松友好)
- **备选**：系统默认字体

## 🚀 部署建议

### Apache 服务器
- 确保启用 mod_rewrite
- 确保启用 mod_deflate
- 确保启用 mod_expires
- 确保启用 mod_headers

### Nginx 服务器
将 .htaccess 规则转换为 Nginx 配置：
```nginx
# Gzip 压缩
gzip on;
gzip_types text/css application/javascript image/svg+xml;

# 缓存控制
location ~* \.(css|js|png|jpg|jpeg|gif|webp|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 📊 性能指标

目标性能指标：
- **Lighthouse 性能得分** > 90
- **首次内容绘制 (FCP)** < 1.5s
- **最大内容绘制 (LCP)** < 2.5s
- **首次输入延迟 (FID)** < 100ms
- **累积布局偏移 (CLS)** < 0.1

## 🐛 故障排除

### 常见问题

**游戏无法加载**
- 检查 iframe src URL 是否正确
- 检查网络连接
- 检查浏览器控制台错误

**样式显示异常**
- 确认 TailwindCSS CDN 正常加载
- 检查自定义 CSS 文件路径
- 清除浏览器缓存

**移动端菜单无法工作**
- 检查 JavaScript 是否正常加载
- 检查控制台错误信息
- 确认元素 ID 匹配

## 📧 联系方式

如有问题或建议，请通过以下方式联系：
- 网站：[368chickens.online](https://368chickens.online)
- 游戏：[368chickens.com](https://368chickens.com/)
- 项目问题：请提交 GitHub Issue

## 📄 许可证

本项目仅用于展示目的。游戏内容版权归原作者所有。

---

⭐ 如果这个项目对您有帮助，请给个星标支持！ 