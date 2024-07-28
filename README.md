# Simon
全站社交媒体应用

- 用户管理: [clerk](https://clerk.com/)
- 数据库: prisma + hostings

<!-- --registry=https://registry.npmmirror.com -->

代办：
- [ ] redux
  - 全局保存 当前用户的id，在各个组件里使用
  - 全局刷新 - 发布订阅
- [ ] 

### 环境变量
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL=

WEBHOOK_SECRET=
```
