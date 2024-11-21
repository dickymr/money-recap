import { TransactionListType } from '../types';

const transactionList: TransactionListType[] = [
  {
    id: 'list-0',
    periode: 'future',
    income: 0,
    expense: 0,
    balance: 0,
    transactions: [],
  },
  {
    id: 'list-1',
    periode: '2024-11-01 - 2024-11-30',
    income: 4500000,
    expense: 225000,
    balance: 4275000,
    transactions: [
      {
        id: 'trans-1-3',
        date: '2024-11-22',
        total: 4500000,
        items: [
          {
            id: 'item-1-3-1',
            icon: 'Network',
            color: '#7CFC00',
            category: 'Salary',
            wallet: 'SeaBank',
            desc: 'November Salary',
            amount: 4500000,
            budgets: [],
          },
        ],
      },
      {
        id: 'trans-1-2',
        date: '2024-11-12',
        total: -75000,
        items: [
          {
            id: 'item-1-2-1',
            icon: 'Phone',
            color: '#4682B4',
            category: 'Utilities - Phone',
            wallet: 'SeaBank',
            desc: 'Phone Bill',
            amount: -25000,
            budgets: ['Utilities'],
          },
          {
            id: 'item-1-2-2',
            icon: 'Mail',
            color: '#00FF00',
            category: 'Utilities - Internet',
            wallet: 'SeaBank',
            desc: 'Internet Bill',
            amount: -50000,
            budgets: ['Utilities'],
          },
        ],
      },
      {
        id: 'trans-1-1',
        date: '2024-11-05',
        total: -150000,
        items: [
          {
            id: 'item-1-1-3',
            icon: 'Dessert',
            color: '#D2691E',
            category: 'Food - Dessert',
            wallet: 'SeaBank',
            desc: 'Cake',
            amount: -50000,
            budgets: ['Food'],
          },
          {
            id: 'item-1-1-2',
            icon: 'Drill',
            color: '#FF4500',
            category: 'Food - Drinks',
            wallet: 'SeaBank',
            desc: 'Wine',
            amount: -30000,
            budgets: ['Food'],
          },
          {
            id: 'item-1-1-1',
            icon: 'Facebook',
            color: '#2ECC40',
            category: 'Food - Dining Out',
            wallet: 'SeaBank',
            desc: 'Restaurant Dinner',
            amount: -70000,
            budgets: ['Food'],
          },
        ],
      },
    ],
  },
  {
    id: 'list-2',
    periode: '2024-10-01 - 2024-10-31',
    income: 5000000,
    expense: 140000,
    balance: 4860000,
    transactions: [
      {
        id: 'trans-2-3',
        date: '2024-10-18',
        total: 5000000,
        items: [
          {
            id: 'item-2-3-1',
            icon: 'AArrowDown',
            color: '#32CD32',
            category: 'Salary',
            wallet: 'SeaBank',
            desc: 'October Salary',
            amount: 5000000,
            budgets: [],
          },
        ],
      },
      {
        id: 'trans-2-2',
        date: '2024-10-14',
        total: -50000,
        items: [
          {
            id: 'item-2-2-2',
            icon: 'Cake',
            color: '#FF4500',
            category: 'Gifts - Cards',
            wallet: 'SeaBank',
            desc: 'Greeting Card',
            amount: -20000,
            budgets: ['Gifts'],
          },
          {
            id: 'item-2-2-1',
            icon: 'Gift',
            color: '#98FB98',
            category: 'Gifts',
            wallet: 'SeaBank',
            desc: 'Birthday Gift',
            amount: -30000,
            budgets: ['Gifts'],
          },
        ],
      },
      {
        id: 'trans-2-1',
        date: '2024-10-02',
        total: -90000,
        items: [
          {
            id: 'item-2-1-3',
            icon: 'Cable',
            color: '#8B4513',
            category: 'Shopping - Cables',
            wallet: 'SeaBank',
            desc: 'USB Cable',
            amount: -10000,
            budgets: ['Shopping'],
          },
          {
            id: 'item-2-1-2',
            icon: 'Battery',
            color: '#FF1493',
            category: 'Shopping - Accessories',
            wallet: 'SeaBank',
            desc: 'Phone Charger',
            amount: -30000,
            budgets: ['Shopping'],
          },
          {
            id: 'item-2-1-1',
            icon: 'Rabbit',
            color: '#00FA9A',
            category: 'Shopping - Electronics',
            wallet: 'SeaBank',
            desc: 'Gadget Purchase',
            amount: -60000,
            budgets: ['Shopping'],
          },
        ],
      },
    ],
  },
  {
    id: 'list-3',
    periode: '2024-09-01 - 2024-09-30',
    income: 2800000,
    expense: 300000,
    balance: 2500000,
    transactions: [
      {
        id: 'trans-3-3',
        date: '2024-09-22',
        total: 2800000,
        items: [
          {
            id: 'item-3-3-1',
            icon: 'Kanban',
            color: '#00FF7F',
            category: 'Freelance Work',
            wallet: 'SeaBank',
            desc: 'Project Payment',
            amount: 2800000,
            budgets: [],
          },
        ],
      },
      {
        id: 'trans-3-2',
        date: '2024-09-15',
        total: -100000,
        items: [
          {
            id: 'item-3-2-2',
            icon: 'Lightbulb',
            color: '#FFD700',
            category: 'Utilities - Electricity',
            wallet: 'SeaBank',
            desc: 'Electricity Bill',
            amount: -50000,
            budgets: ['Utilities'],
          },
          {
            id: 'item-3-2-1',
            icon: 'Sailboat',
            color: '#2E8B57',
            category: 'Utilities - Water',
            wallet: 'SeaBank',
            desc: 'Water Bill',
            amount: -50000,
            budgets: ['Utilities'],
          },
        ],
      },
      {
        id: 'trans-3-1',
        date: '2024-09-05',
        total: -200000,
        items: [
          {
            id: 'item-3-1-3',
            icon: 'Sprout',
            color: '#FF6347',
            category: 'Health - Yoga',
            wallet: 'SeaBank',
            desc: 'Yoga Class',
            amount: -50000,
            budgets: ['Health'],
          },
          {
            id: 'item-3-1-2',
            icon: 'Pill',
            color: '#8A2BE2',
            category: 'Health - Supplements',
            wallet: 'SeaBank',
            desc: 'Protein Shake',
            amount: -50000,
            budgets: ['Health'],
          },
          {
            id: 'item-3-1-1',
            icon: 'Medal',
            color: '#3CB371',
            category: 'Health - Gym',
            wallet: 'SeaBank',
            desc: 'Gym Membership',
            amount: -100000,
            budgets: ['Health'],
          },
        ],
      },
    ],
  },
  {
    id: 'list-4',
    periode: '2024-08-01 - 2024-08-31',
    income: 3200000,
    expense: 170000,
    balance: 3030000,
    transactions: [
      {
        id: 'trans-4-3',
        date: '2024-08-20',
        total: 3200000,
        items: [
          {
            id: 'item-4-3-1',
            icon: 'Currency',
            color: '#20B2AA',
            category: 'Bonus',
            wallet: 'SeaBank',
            desc: 'Performance Bonus',
            amount: 3200000,
            budgets: [],
          },
        ],
      },
      {
        id: 'trans-4-2',
        date: '2024-08-11',
        total: -50000,
        items: [
          {
            id: 'item-4-2-1',
            icon: 'Car',
            color: '#48D1CC',
            category: 'Transport - Taxi',
            wallet: 'SeaBank',
            desc: 'Taxi Ride',
            amount: -50000,
            budgets: ['Transport'],
          },
        ],
      },
      {
        id: 'trans-4-1',
        date: '2024-08-03',
        total: -120000,
        items: [
          {
            id: 'item-4-1-5',
            icon: 'Glasses',
            color: '#00FF7F',
            category: 'Entertainment - Extras',
            wallet: 'SeaBank',
            desc: '3D Glasses',
            amount: -20000,
            budgets: ['Entertainment'],
          },
          {
            id: 'item-4-1-4',
            icon: 'Candy',
            color: '#FF69B4',
            category: 'Entertainment - Candy',
            wallet: 'SeaBank',
            desc: 'Candy',
            amount: -20000,
            budgets: ['Entertainment'],
          },
          {
            id: 'item-4-1-3',
            icon: 'GlassWater',
            color: '#8B0000',
            category: 'Entertainment - Drinks',
            wallet: 'SeaBank',
            desc: 'Soda',
            amount: -20000,
            budgets: ['Entertainment'],
          },
          {
            id: 'item-4-1-2',
            icon: 'Popcorn',
            color: '#FF4500',
            category: 'Entertainment - Snacks',
            wallet: 'SeaBank',
            desc: 'Movie Snacks',
            amount: -20000,
            budgets: ['Entertainment'],
          },
          {
            id: 'item-4-1-1',
            icon: 'PiggyBank',
            color: '#40E0D0',
            category: 'Entertainment - Movies',
            wallet: 'SeaBank',
            desc: 'Cinema Tickets',
            amount: -40000,
            budgets: ['Entertainment'],
          },
        ],
      },
    ],
  },
  {
    id: 'list-5',
    periode: '2024-07-01 - 2024-07-31',
    income: 3000000,
    expense: 300000,
    balance: 2700000,
    transactions: [
      {
        id: 'trans-5-3',
        date: '2024-07-18',
        total: 3000000,
        items: [
          {
            id: 'item-5-3-1',
            icon: 'CreditCard',
            color: '#00CED1',
            category: 'Salary',
            wallet: 'SeaBank',
            desc: 'July Salary',
            amount: 3000000,
            budgets: [],
          },
        ],
      },
      {
        id: 'trans-5-2',
        date: '2024-07-10',
        total: -150000,
        items: [
          {
            id: 'item-5-2-3',
            icon: 'Baby',
            color: '#FF1493',
            category: 'Shopping - Accessories',
            wallet: 'SeaBank',
            desc: 'Bag Shop',
            amount: -40000,
            budgets: ['Shopping'],
          },
          {
            id: 'item-5-2-2',
            icon: 'ShoppingBasket',
            color: '#FFD700',
            category: 'Shopping - Shoes',
            wallet: 'SeaBank',
            desc: 'Shoe Store',
            amount: -30000,
            budgets: ['Shopping'],
          },
          {
            id: 'item-5-2-1',
            icon: 'IdCard',
            color: '#5F9EA0',
            category: 'Shopping - Clothes',
            wallet: 'SeaBank',
            desc: 'Clothing Store',
            amount: -50000,
            budgets: ['Shopping'],
          },
        ],
      },
      {
        id: 'trans-5-1',
        date: '2024-07-02',
        total: -150000,
        items: [
          {
            id: 'item-5-1-5',
            icon: 'Fish',
            color: '#20B2AA',
            category: 'Food - Seafood',
            wallet: 'SeaBank',
            desc: 'Fish Market',
            amount: -25000,
            budgets: ['Groceries'],
          },
          {
            id: 'item-5-1-4',
            icon: 'Milk',
            color: '#8A2BE2',
            category: 'Food - Dairy',
            wallet: 'SeaBank',
            desc: 'Dairy Shop',
            amount: -20000,
            budgets: ['Groceries'],
          },
          {
            id: 'item-5-1-3',
            icon: 'Beaker',
            color: '#FFD700',
            category: 'Food - Bakery',
            wallet: 'SeaBank',
            desc: '',
            amount: -30000,
            budgets: ['Groceries'],
          },
          {
            id: 'item-5-1-2',
            icon: 'Apple',
            color: '#FF6347',
            category: 'Food - Fruits',
            wallet: 'SeaBank',
            desc: 'Fruit Store',
            amount: -25000,
            budgets: ['Groceries'],
          },
          {
            id: 'item-5-1-1',
            icon: 'Wallet',
            color: '#4682B4',
            category: 'Food - Groceries',
            wallet: 'SeaBank',
            desc: '',
            amount: -50000,
            budgets: ['Groceries', 'Meals', 'Work'],
          },
        ],
      },
    ],
  },
];

export { transactionList };