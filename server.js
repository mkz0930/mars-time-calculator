/**
 * Mars Time Calculator
 * Calculates current Mars Sol Date (MSD) and Mars Local Time
 * 
 * Based on NASA algorithms for Mars timekeeping
 * No external API required - pure mathematical calculation
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/**
 * Calculate Mars Sol Date (MSD) from Earth Julian Date
 * Formula: MSD = (JD - 2405522.0025) / 1.027491252
 * Reference: NASA Mars24 algorithm
 */
function calculateMSD(julianDate) {
    const J2000 = 2451545.0; // Julian Date of J2000 epoch
    const marsEpoch = 2405522.0025; // Mars sol epoch
    const marsDayLength = 1.027491252; // Mars day length in Earth days
    
    return (julianDate - marsEpoch) / marsDayLength;
}

/**
 * Convert Earth date to Julian Date
 */
function toJulianDate(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = date.getUTCSeconds();
    
    const a = Math.floor((14 - month) / 12);
    const y = year + 4800 - a;
    const m = month + 12 * a - 3;
    
    const jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + 
               Math.floor(y / 4) - Math.floor(y / 100) + 
               Math.floor(y / 400) - 32045;
    
    const dayFraction = (hour - 12) / 24 + minute / 1440 + second / 86400;
    
    return jd + dayFraction;
}

/**
 * Calculate Mars Local Time from MSD
 */
function calculateMarsLocalTime(msd) {
    const millisecondsInSol = 88775244; // Mars day in milliseconds
    const msdFraction = msd - Math.floor(msd);
    const msInSol = msdFraction * millisecondsInSol;
    
    const hours = Math.floor(msInSol / 3600000);
    const minutes = Math.floor((msInSol % 3600000) / 60000);
    const seconds = Math.floor((msInSol % 60000) / 1000);
    
    return {
        hours: hours % 24,
        minutes,
        seconds
    };
}

/**
 * Get Mars season from MSD
 */
function getMarsSeason(msd) {
    const tropicalYear = 668.5991; // Mars tropical year in sols
    const msdInTropicalYear = msd % tropicalYear;
    
    // Mars seasons (Northern Hemisphere)
    if (msdInTropicalYear < 157.5) return 'Spring Equinox';
    if (msdInTropicalYear < 337.5) return 'Summer Solstice';
    if (msdInTropicalYear < 517.5) return 'Autumn Equinox';
    return 'Winter Solstice';
}

/**
 * Main endpoint - Get current Mars time
 */
app.get('/', (req, res) => {
    const now = new Date();
    const jd = toJulianDate(now);
    const msd = calculateMSD(jd);
    const mlt = calculateMarsLocalTime(msd);
    const season = getMarsSeason(msd);
    
    res.json({
        success: true,
        timestamp: now.toISOString(),
        earth: {
            date: now.toISOString(),
            julianDate: jd
        },
        mars: {
            solDate: msd.toFixed(4),
            localTime: `${String(mlt.hours).padStart(2, '0')}:${String(mlt.minutes).padStart(2, '0')}:${String(mlt.seconds).padStart(2, '0')}`,
            hours: mlt.hours,
            minutes: mlt.minutes,
            seconds: mlt.seconds,
            season: season,
            sol: Math.floor(msd)
        },
        info: {
            description: 'Mars Time Calculator',
            algorithm: 'NASA Mars24',
            noExternalAPI: true
        }
    });
});

/**
 * Health check endpoint
 */
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        service: 'mars-time-calculator',
        timestamp: new Date().toISOString()
    });
});

/**
 * x402 payment info endpoint (for TaskMarket)
 */
app.get('/payment', (req, res) => {
    res.json({
        x402Version: 1,
        accepts: [{
            scheme: 'exact',
            network: 'base-mainnet',
            maxAmountRequired: '500000', // 0.5 USDC in smallest units
            payTo: '0xYourWalletAddress', // Replace with actual wallet
            asset: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913' // USDC on Base
        }],
        description: 'Mars Time Calculator - $0.50 USDC per request'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Mars Time Calculator running on port ${PORT}`);
    console.log(`📊 Endpoint: http://localhost:${PORT}/`);
    console.log(`💚 Health: http://localhost:${PORT}/health`);
});
