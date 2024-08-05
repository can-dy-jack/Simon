# Simon
全站社交媒体应用

- 用户管理: [clerk](https://clerk.com/)
- 数据库: prisma + hostings
- 图片: [cloudinary](https://cloudinary.com/)

<!-- npm 镜像 --registry=https://registry.npmmirror.com -->

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
- [x] middleware.ts文件位置导致的报错？
- usecontext
  - [x] 更新用户信息刷新 - 使用router.refresh()替代
- [x] 用户信息更新 - cover图片功能
- [x] clerk 生产环境
