import locales from '@/locales';

const formatCurrency = (num: number) => {
  return locales.numberToCurrency(num, {
    unit: 'Rp',
    delimiter: '.',
    separator: ',',
    precision: 0,
  });
};

export { formatCurrency };
