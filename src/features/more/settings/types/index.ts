type SettingType = {
  language: 'default' | 'en' | 'id';
  theme: 'default' | 'light' | 'dark';
  currency: 'IDR' | 'USD';
  currencyFormat: '-Rp 1.123.456,89' | '-Rp 1,123,456.89';
  dateFormat: 'DD/MM/YYYY' | 'MM/DD/YYYY';
  firstDayOfWeek:
    | 'sunday'
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday';
  firstDayOfMonth:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '23'
    | '24'
    | '25'
    | '26'
    | '27'
    | '28'
    | '29'
    | '30';
};

export { SettingType };
