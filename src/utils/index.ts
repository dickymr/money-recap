const formatNumber = (stringNum: string) => {
  const numericValue = stringNum.replace(/\D/g, '');
  const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return formattedValue;
};

export { formatNumber };
