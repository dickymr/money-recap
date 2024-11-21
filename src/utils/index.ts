import locales from '@/locales';

const formatNumber = (stringNum: string) => {
  const numericValue = stringNum.replace(/\D/g, '');
  const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return formattedValue;
};

const formatCurrency = (num: number) => {
  return locales.numberToCurrency(num, {
    unit: 'Rp',
    delimiter: '.',
    separator: ',',
    precision: 0,
  });
};

export { formatNumber, formatCurrency };
