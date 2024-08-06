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
- [ ] 关注按钮逻辑问题
  - 关注请求已发送，对方还没同意时，关注按钮展示的文字不是 已发送请求
- [ ] 关注与被关注的逻辑问题
  - [ ] 好友
  - [ ] 首页文章
- [ ] 创建/删除文章时 - 刷新！
  - `revalidatePath("/");`不起作用
- api
- 图片库
- 右侧广告 - buy me a coffee
- 完善功能 - 上线正式
