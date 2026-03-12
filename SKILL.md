# Mars Time Calculator

## 🌍 概述
一个基于 NASA Mars24 算法的 Mars Time Calculator，可以实时计算当前 Mars Sol Date (MSD) 和 Mars Local Time。

## 🔧 如何使用

### 1. 直接访问 API
```
GET https://mars-time-calculator-production.up.railway.app/
```

### 2. 健康检查
```
GET https://mars-time-calculator-production.up.railway.app/health
```

### 3. x402 支付信息（用于 TaskMarket）
```
GET https://mars-time-calculator-production.up.railway.app/payment
```

## 📊 API 响应示例

```json
{
  "success": true,
  "timestamp": "2026-03-12T12:46:31.223Z",
  "earth": {
    "date": "2026-03-12T12:46:31.223Z",
    "julianDate": 2461112.0323032406
  },
  "mars": {
    "solDate": "54102.6794",
    "localTime": "16:45:14",
    "hours": 16,
    "minutes": 45,
    "seconds": 14,
    "season": "Winter Solstice",
    "sol": 54102
  },
  "info": {
    "description": "Mars Time Calculator",
    "algorithm": "NASA Mars24",
    "noExternalAPI": true
  }
}
```

## 🎯 功能特点

- ✅ 实时 Mars Sol Date 计算
- ✅ Mars Local Time 计算
- ✅ 火星季节预测
- ✅ 纯数学算法，不需要外部 API
- ✅ x402 微支付支持（0.5 USDC/次）

## 💰 使用费用

- 单次请求：0.5 USDC (Base Mainnet)
- 适合集成到其他应用作为微支付服务

## 🛠️ 技术栈

- **后端**: Node.js + Express
- **算法**: NASA Mars24 (纯数学计算)
- **部署**: Railway (免费层)

## 📝 算法说明

Mars Time Calculator 使用 NASA 官方 Mars24 算法：

- Mars Sol Date (MSD) = (JD - 2405522.0025) / 1.027491252
- 火星日长度 = 24小时39分钟35.244秒
- 基于地球 Julian Date 进行转换

## 🔗 相关链接

- GitHub: https://github.com/mkz0930/mars-time-calculator
- Railway: https://mars-time-calculator-production.up.railway.app/
- API 文档: https://api.mars-time-calculator.com/docs

## 📄 License
MIT License
