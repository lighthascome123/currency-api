const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Example exchange rates relative to USD
const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  JPY: 110,
  AUD: 1.35,
  CAD: 1.25,
  CHF: 0.92,
  CNY: 6.45,
  SEK: 8.55,
  NZD: 1.40,
  INR: 74.5,
  BRL: 5.2,
  RUB: 73.0,
  ZAR: 14.3,
  SGD: 1.36,
  HKD: 7.8,
  NOK: 8.4,
  KRW: 1150,
  TRY: 8.6,
  MXN: 20.0,
  IDR: 14300,
  MYR: 4.15,
  THB: 33.0,
  VND: 23000,
  PKR: 160,
  EGP: 15.7,
  PLN: 3.9,
  HUF: 300,
  CZK: 21.5,
  DKK: 6.3,
  ILS: 3.2,
  SAR: 3.75,
  QAR: 3.64,
  AED: 3.67,
  KWD: 0.3,
  BHD: 0.38,
  OMR: 0.38,
  JOD: 0.71,
  LBP: 1500,
  MAD: 9.0,
  DZD: 135,
  TND: 2.8,
  ARS: 95,
  CLP: 750,
  COP: 3800,
  PEN: 4.0,
  UYU: 43,
  VEB: 4500000,
  GHS: 6.0,
  KES: 108,
  NGN: 410,
  TZS: 2300,
  UGX: 3600,
  XAF: 555,
  XOF: 555,
  ZMK: 18.0,
  MZN: 63,
  ETB: 45,
  AOA: 650,
};

app.get('/api/convert', (req, res) => {
  const { from, to, amount } = req.query;
  
  if (!exchangeRates[from] || !exchangeRates[to]) {
    return res.status(400).json({ error: 'Invalid currency code' });
  }

  const convertedAmount = (amount / exchangeRates[from]) * exchangeRates[to];
  res.json({ convertedAmount });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
