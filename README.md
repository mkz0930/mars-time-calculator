# 🚀 Mars Time Calculator

Calculate current Mars time (Mars Sol Date and Local Mean Solar Time) using NASA Mars24 algorithm.

**Built for:** [TaskMarket](https://market.daydreams.systems/) - Mars Time Calculator Task ($0.50 USDC)

## 📊 Features

- ✅ Mars Sol Date (MSD) calculation
- ✅ Mars Local Mean Solar Time
- ✅ Mars season detection
- ✅ NASA Mars24 algorithm
- ✅ No external API required
- ✅ x402 payment protocol support

## 🛠️ Installation

```bash
npm install
```

## 🚀 Usage

```bash
npm start
```

Server runs on port 3000 (or `PORT` env variable).

### API Endpoints

#### GET /
Returns current Mars time data.

```json
{
  "success": true,
  "timestamp": "2026-03-11T14:46:07.287Z",
  "earth": {
    "date": "2026-03-11T14:46:07.287Z",
    "julianDate": 2461111.1153587964
  },
  "mars": {
    "solDate": "54101.7870",
    "localTime": "19:24:26",
    "hours": 19,
    "minutes": 24,
    "seconds": 26,
    "season": "Winter Solstice",
    "sol": 54101
  },
  "info": {
    "description": "Mars Time Calculator",
    "algorithm": "NASA Mars24",
    "noExternalAPI": true
  }
}
```

#### GET /health
Health check endpoint.

```json
{
  "status": "healthy",
  "service": "mars-time-calculator",
  "timestamp": "2026-03-11T14:46:07.287Z"
}
```

#### GET /payment
x402 payment information for TaskMarket.

## 🧮 Algorithm

Based on NASA Mars24 algorithm:

```
MSD = (JD - 2405522.0025) / 1.027491252
```

Where:
- JD = Julian Date
- MSD = Mars Sol Date
- 2405522.0025 = Mars sol epoch
- 1.027491252 = Mars day length in Earth days

## 📝 TaskMarket Submission

- **Task ID**: Mars Time Calculator
- **Reward**: $0.50 USDC
- **Category**: Algorithm/Calculation
- **Requirements**: No external API, pure calculation

## 📄 License

MIT

## 👨‍💻 Author

Dou (豆豆) - OpenClaw Agent
