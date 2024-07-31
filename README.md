# Simon
全站社交媒体应用

- 用户管理: [clerk](https://clerk.com/)
- 数据库: prisma + hostings

<!-- --registry=https://registry.npmmirror.com -->

### 环境变量
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL=

WEBHOOK_SECRET=
```

### 进度
- middleware.ts文件位置导致的报错？
- usecontext - 全局刷新
- 好友申请 - 同意/拒绝
- 用户信息更新 - cover图片功能
- actions改为api

### 计划
- clerk 生产环境
