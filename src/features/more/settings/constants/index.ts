import { PickerType } from '@/constants/types';

const languages: PickerType[] = [
  { label: 'Default', value: 'default' },
  { label: 'English', value: 'en' },
  { label: 'Bahasa Indonesia', value: 'id' },
];

const themes: PickerType[] = [
  { label: 'Default', value: 'default' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

const currencies: PickerType[] = [
  { label: 'IDR', value: 'idr' },
  { label: 'USD', value: 'usd' },
];

const currencyFormats: PickerType[] = [
  { label: '-Rp 1.234.567,00', value: '-Rp 1.234.567,00' },
  { label: '-Rp 1,234,567.00', value: '-Rp 1,234,567.00' },
];

const dateFormats: PickerType[] = [
  { label: 'DD/MM/YYYY', value: 'DD/MM/YYYY' },
  { label: 'MM/DD/YYYY', value: 'MM/DD/YYYY' },
  { label: 'YYYY/MM/DD', value: 'YYYY/MM/DD' },
  { label: 'YYYY/DD/MM', value: 'YYYY/DD/MM' },
];

const firstDayofWeeks: PickerType[] = [
  { label: 'Sunday', value: 'sunday' },
  { label: 'Monday', value: 'monday' },
  { label: 'Tuesday', value: 'tusday' },
  { label: 'Wednesday', value: 'wednesday' },
  { label: 'Thursday', value: 'thursday' },
  { label: 'Friday', value: 'friday' },
  { label: 'Saturday', value: 'saturday' },
];

const firstDayofMonths: PickerType[] = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
  { label: '17', value: '17' },
  { label: '18', value: '18' },
  { label: '19', value: '19' },
  { label: '20', value: '20' },
  { label: '21', value: '21' },
  { label: '22', value: '22' },
  { label: '23', value: '23' },
  { label: '24', value: '24' },
  { label: '25', value: '25' },
  { label: '26', value: '26' },
  { label: '27', value: '27' },
  { label: '28', value: '28' },
  { label: '29', value: '29' },
  { label: '30', value: '30' },
];

export {
  languages,
  themes,
  currencies,
  currencyFormats,
  dateFormats,
  firstDayofWeeks,
  firstDayofMonths,
};
