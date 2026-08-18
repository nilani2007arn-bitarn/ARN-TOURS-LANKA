export type Currency = 'USD' | 'EUR' | 'GBP' | 'AUD' | 'LKR';

export const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number; label: string }> = {
  USD: { symbol: '$', rate: 1, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.78, label: 'GBP (£)' },
  AUD: { symbol: 'A$', rate: 1.52, label: 'AUD (A$)' },
  LKR: { symbol: 'Rs.', rate: 305, label: 'LKR (Rs)' },
};

export function formatPrice(amountUSD: number, currency: Currency): string {
  const info = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const converted = amountUSD * info.rate;
  if (currency === 'LKR') {
    return `${info.symbol} ${Math.round(converted).toLocaleString()}`;
  }
  return `${info.symbol}${Math.round(converted).toLocaleString()}`;
}
