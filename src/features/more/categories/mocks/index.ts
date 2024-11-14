import { CategoriesType } from '../types';

const categories: CategoriesType[] = [
  {
    id: 1,
    name: 'Food',
    icon: 'Medal',
    color: '#FF6347',
    type: 'expense',
    children: [
      { id: 2, name: 'Meals', icon: 'Newspaper', color: '#FF7F50', type: 'expense' },
      { id: 3, name: 'Snack & Drink', icon: 'PocketKnife', color: '#FFA07A', type: 'expense' },
      { id: 4, name: 'Restaurant', icon: 'BookUser', color: '#FF4500', type: 'expense' },
    ],
  },
  {
    id: 5,
    name: 'Transport',
    icon: 'Bus',
    color: '#FFD700',
    type: 'expense',
    children: [
      { id: 6, name: 'Gasoline', icon: 'Car', color: '#FFA500', type: 'expense' },
      { id: 7, name: 'Parking', icon: 'ParkingMeter', color: '#FF8C00', type: 'expense' },
      { id: 8, name: 'Taxi', icon: 'CarTaxiFront', color: '#FF6347', type: 'expense' },
    ],
  },
  {
    id: 9,
    name: 'Health',
    icon: 'Heart',
    color: '#98FB98',
    type: 'expense',
    children: [
      { id: 10, name: 'Medicine', icon: 'Piano', color: '#8FBC8F', type: 'expense' },
      { id: 11, name: 'Doctor', icon: 'Stethoscope', color: '#66CDAA', type: 'expense' },
      { id: 12, name: 'Insurance', icon: 'ShieldCheck', color: '#20B2AA', type: 'expense' },
    ],
  },
  {
    id: 13,
    name: 'Entertainment',
    icon: 'Gamepad',
    color: '#AFEEEE',
    type: 'expense',
    children: [
      { id: 14, name: 'Movies', icon: 'Film', color: '#48D1CC', type: 'expense' },
      { id: 15, name: 'Games', icon: 'Gamepad2', color: '#40E0D0', type: 'expense' },
      { id: 16, name: 'Music', icon: 'Music3', color: '#00CED1', type: 'expense' },
    ],
  },
  {
    id: 17,
    name: 'Utilities',
    icon: 'Lightbulb',
    color: '#6A5ACD',
    type: 'expense',
    children: [
      { id: 18, name: 'Electricity', icon: 'Bolt', color: '#7B68EE', type: 'expense' },
      { id: 19, name: 'Water', icon: 'Droplet', color: '#9370DB', type: 'expense' },
      { id: 20, name: 'Internet', icon: 'Wifi', color: '#8A2BE2', type: 'expense' },
    ],
  },
  {
    id: 21,
    name: 'Education',
    icon: 'Book',
    color: '#DA70D6',
    type: 'expense',
    children: [],
  },
  {
    id: 22,
    name: 'Shopping',
    icon: 'ShoppingCart',
    color: '#FF69B4',
    type: 'expense',
    children: [
      { id: 23, name: 'Clothes', icon: 'CircleDotDashed', color: '#FF1493', type: 'expense' },
      { id: 24, name: 'Electronics', icon: 'Laptop', color: '#C71585', type: 'expense' },
      { id: 25, name: 'Groceries', icon: 'ShoppingBag', color: '#DB7093', type: 'expense' },
    ],
  },
  {
    id: 26,
    name: 'Salary',
    icon: 'Briefcase',
    color: '#4682B4',
    type: 'income',
    children: [],
  },
  {
    id: 27,
    name: 'Investments',
    icon: 'ChartLine',
    color: '#4169E1',
    type: 'income',
    children: [
      { id: 28, name: 'Stocks', icon: 'ChartBar', color: '#5F9EA0', type: 'income' },
      { id: 29, name: 'Bonds', icon: 'ChartPie', color: '#6495ED', type: 'income' },
    ],
  },
  {
    id: 30,
    name: 'Freelance',
    icon: 'FolderTree',
    color: '#B0E0E6',
    type: 'income',
    children: [],
  },
];

export { categories };
