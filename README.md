# 泰果汇 (Thailand Fruit Club)

泰果汇是一个全平台电商应用，专注于从泰国直接空运新鲜热带水果到欧洲（首先在荷兰展开业务）。

## 主要功能

- 产品展示：展示多种泰国特色热带水果
- 在线订购：方便用户浏览产品并下单
- 会员服务：提供20欧元/月的会员订阅服务，每周配送新鲜水果
- 果树认养：允许用户认养泰国果园中的果树，并接收实时成长信息
- 多语言支持：支持中文、英文、荷兰语和泰语
- 响应式设计：适配各种设备尺寸

## 技术栈

- **前端框架**：Next.js
- **UI框架**：Tailwind CSS
- **状态管理**：React Hooks
- **主题系统**：next-themes (支持明暗主题)
- **国际化**：next-intl (多语言支持)
- **图标**：Heroicons
- **反应式组件**：Headless UI

## 如何开始

### 系统要求

- Node.js 16.8 或更高版本
- npm 7 或更高版本

### 安装步骤

1. 克隆仓库
   ```bash
   git clone https://github.com/yourusername/thailand-fruit-club.git
   cd thailand-fruit-club
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 启动开发服务器
   ```bash
   npm run dev
   ```

4. 打开浏览器访问 http://localhost:3000

### 生产构建

```bash
npm run build
npm start
```

## 项目结构

```
thailand-fruit-club/
├── app/                       # Next.js App Router
│   ├── components/            # 共享组件
│   ├── routes/                # 路由页面
│   │   ├── products/          # 产品相关页面
│   │   ├── membership/        # 会员服务页面
│   │   ├── adopt-a-tree/      # 果树认养页面
│   │   ├── cart/              # 购物车页面
│   │   └── checkout/          # 结算页面
│   ├── lib/                   # 工具函数和服务
│   ├── hooks/                 # 自定义Hooks
│   ├── store/                 # 状态管理
│   ├── api/                   # API路由
│   └── public/                # 静态资源
├── public/                    # 公共静态资源
└── package.json               # 项目依赖
```

## 未来规划

1. 实现支付集成 (信用卡，iDEAL，微信支付，支付宝)
2. 在线客服系统
3. 库存管理系统
4. 跨平台移动应用 (iOS & Android)
5. 扩展到更多欧洲国家

## 贡献

欢迎提交问题和拉取请求！

## 许可证

MIT
