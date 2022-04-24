import { CurrencyCode } from './currency';

const toAmount = (amount: string | number, currencyCode: CurrencyCode = 'NGN'): string => (
  new Intl.NumberFormat(currencyCode, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: 'currency',
    currency: currencyCode,
  }).format(Number(amount))
);

export default toAmount;
