import { Category, Wallet } from '@/constants/types';

const wallets: Wallet[] = [
  {
    category: 'Basic',
    total: 750000,
    accounts: [
      {
        name: 'Cash',
        balance: 250000,
        icon: 'Coins',
        color: '#FF5733',
      },
      {
        name: 'BCA',
        balance: 250000,
        icon: 'Landmark',
        color: '#33FF57',
      },
      {
        name: 'Jago',
        balance: 500000,
        icon: 'HandCoins',
        color: '#F235FF',
      },
      {
        name: 'SuperBank',
        balance: 420000,
        icon: 'PiggyBank',
        color: '#FF33A1',
      },
    ],
  },
  {
    category: 'Saving',
    total: 250000,
    accounts: [
      {
        name: 'Backup',
        balance: 250000,
        icon: 'DatabaseBackup',
        color: '#A133FF',
      },
      {
        name: 'Cash',
        balance: 250000,
        icon: 'Coins',
        color: '#FF5733',
      },
      {
        name: 'BCA',
        balance: 250000,
        icon: 'Landmark',
        color: '#33FF57',
      },
      {
        name: 'Jago',
        balance: 500000,
        icon: 'HandCoins',
        color: '#F235FF',
      },
      {
        name: 'SuperBank',
        balance: 420000,
        icon: 'PiggyBank',
        color: '#FF33A1',
      },
    ],
  },
  {
    category: 'Archived',
    total: 0,
    accounts: [
      {
        name: 'Ovo',
        balance: 250000,
        icon: 'Package',
        color: '#FFA133',
      },
      {
        name: 'Gopay',
        balance: 500000,
        icon: 'Package2',
        color: '#3357FF',
      },
      {
        name: 'Cash',
        balance: 250000,
        icon: 'Coins',
        color: '#FF5733',
      },
      {
        name: 'BCA',
        balance: 250000,
        icon: 'Landmark',
        color: '#33FF57',
      },
      {
        name: 'Jago',
        balance: 500000,
        icon: 'HandCoins',
        color: '#F235FF',
      },
      {
        name: 'SuperBank',
        balance: 420000,
        icon: 'PiggyBank',
        color: '#FF33A1',
      },
    ],
  },
];

const listExpense: Category[] = [
  {
    name: 'Food',
    icon: 'Medal',
    color: '#FF6347',
    children: [
      { name: 'Meals', icon: 'Newspaper', color: '#FF7F50' },
      { name: 'Snack & Drink', icon: 'PocketKnife', color: '#FFA07A' },
      { name: 'Restaurant', icon: 'BookUser', color: '#FF4500' },
    ],
  },
  {
    name: 'Transport',
    icon: 'Bus',
    color: '#FFD700',
    children: [
      { name: 'Gasoline', icon: 'Car', color: '#FFA500' },
      { name: 'Parking', icon: 'ParkingMeter', color: '#FF8C00' },
      { name: 'Taxi', icon: 'CarTaxiFront', color: '#FF6347' },
    ],
  },
  {
    name: 'Health',
    icon: 'Heart',
    color: '#98FB98',
    children: [
      { name: 'Medicine', icon: 'Piano', color: '#8FBC8F' },
      { name: 'Doctor', icon: 'Stethoscope', color: '#66CDAA' },
      { name: 'Insurance', icon: 'ShieldCheck', color: '#20B2AA' },
    ],
  },
  {
    name: 'Entertainment',
    icon: 'Gamepad',
    color: '#AFEEEE',
    children: [
      { name: 'Movies', icon: 'Film', color: '#48D1CC' },
      { name: 'Games', icon: 'Gamepad2', color: '#40E0D0' },
      { name: 'Music', icon: 'Music3', color: '#00CED1' },
    ],
  },
  {
    name: 'Utilities',
    icon: 'Lightbulb',
    color: '#6A5ACD',
    children: [
      { name: 'Electricity', icon: 'Bolt', color: '#7B68EE' },
      { name: 'Water', icon: 'Droplet', color: '#9370DB' },
      { name: 'Internet', icon: 'Wifi', color: '#8A2BE2' },
    ],
  },
  {
    name: 'Education',
    icon: 'Book',
    color: '#DA70D6',
    children: [],
  },
  {
    name: 'Shopping',
    icon: 'ShoppingCart',
    color: '#FF69B4',
    children: [
      { name: 'Clothes', icon: 'CircleDotDashed', color: '#FF1493' },
      { name: 'Electronics', icon: 'Laptop', color: '#C71585' },
      { name: 'Groceries', icon: 'ShoppingBag', color: '#DB7093' },
    ],
  },
];

const listIncome: Category[] = [
  {
    name: 'Salary',
    icon: 'Briefcase',
    color: '#4682B4',
    children: [],
  },
  {
    name: 'Investments',
    icon: 'ChartLine',
    color: '#4169E1',
    children: [
      { name: 'Stocks', icon: 'ChartBar', color: '#5F9EA0' },
      { name: 'Bonds', icon: 'ChartPie', color: '#6495ED' },
    ],
  },
  {
    name: 'Freelance',
    icon: 'FolderTree',
    color: '#B0E0E6',
    children: [],
  },
];

export { wallets, listExpense, listIncome };
