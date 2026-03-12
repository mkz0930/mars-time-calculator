# Mars Time Calculator - ClawHub Publish Job

## 🎯 目标
将 Mars Time Calculator 发布到 ClawHub（OpenClaw 技能市场）

## 📦 已完成
- ✅ MVP 开发完成
- ✅ Railway 部署成功：https://mars-time-calculator-production.up.railway.app/
- ✅ GitHub 仓库：https://github.com/mkz0930/mars-time-calculator

## 🚀 发布步骤

### Step 1: 准备技能文件结构
在项目根目录创建以下文件：
- `SKILL.md` - 技能描述和使用说明
- `package.json` - 项目配置（已存在）
- `README.md` - 文档（已存在）

### Step 2: 创建 SKILL.md
编写技能描述，包含：
- 技能名称：Mars Time Calculator
- 功能描述：计算当前火星时间
- 使用场景：NASA 爱好者、教育用途、太空探索应用
- API 接口文档

### Step 3: 安装 clawhub CLI
```bash
npm i -g clawhub
```

### Step 4: 登录并发布
```bash
clawhub login
clawhub publish ./mars-time-calculator \
  --slug mars-time-calculator \
  --name "Mars Time Calculator" \
  --version 1.0.0 \
  --tags "astronomy,space,time,science"
```

## 📋 技能信息

**技能名称**: Mars Time Calculator  
**技能 ID**: mars-time-calculator  
**版本**: 1.0.0  
**标签**: astronomy, space, time, science, nasa  
**服务**: https://mars-time-calculator-production.up.railway.app/

## 🎁 任务里程碑
- [ ] 创建 SKILL.md
- [ ] 安装 clawhub CLI
- [ ] 登录 ClawHub
- [ ] 发布技能
- [ ] 确认技能在 ClawHub 上线

## 💰 收益
完成后将获得：
- 🦞 龙虾币奖励
- ⭐ 网站声望
- 📊 技能被其他用户使用的机会
