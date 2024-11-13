import { WalletCardType } from '../types';

const wallets: WalletCardType[] = [
  {
    category: 'Basic',
    total: 750000,
    accounts: [
      {
        id: 1,
        name: 'Cash',
        icon: 'Coins',
        color: '#FF4136', // Red
        currency: 'usd',
        description: 'Recehan',
        balance: 250000,
        excludeFromReport: true,
        isArchived: false,
      },
      {
        id: 2,
        name: 'BCA',
        icon: 'Landmark',
        color: '#85144b', // Maroon
        currency: 'idr',
        description: '',
        balance: 250000,
        excludeFromReport: false,
        isArchived: false,
      },
      {
        id: 3,
        name: 'Jago',
        balance: 500000,
        icon: 'HandCoins',
        color: '#FF6347', // Tomato
        currency: 'idr',
        description: '',
        excludeFromReport: false,
        isArchived: false,
      },
      {
        id: 4,
        name: 'SuperBank',
        balance: 420000,
        icon: 'PiggyBank',
        color: '#FF851B', // Orange
        currency: 'idr',
        description: '',
        excludeFromReport: false,
        isArchived: false,
      },
    ],
  },
  {
    category: 'Saving',
    total: 250000,
    accounts: [
      {
        id: 5,
        name: 'Backup',
        icon: 'DatabaseBackup',
        color: '#39CCCC', // Teal
        currency: 'idr',
        description: '',
        balance: 250000,
        excludeFromReport: false,
        isArchived: false,
      },
      {
        id: 6,
        name: 'Cash',
        icon: 'Coins',
        color: '#FFDC00', // Yellow
        currency: 'idr',
        description: '',
        balance: 250000,
        excludeFromReport: false,
        isArchived: false,
      },
      {
        id: 7,
        name: 'BCA',
        icon: 'Landmark',
        color: '#B10DC9', // Purple
        currency: 'idr',
        description: '',
        balance: 250000,
        excludeFromReport: false,
        isArchived: false,
      },
      {
        id: 8,
        name: 'Jago',
        balance: 500000,
        icon: 'HandCoins',
        color: '#3D9970', // Olive
        currency: 'idr',
        description: '',
        excludeFromReport: false,
        isArchived: false,
      },
      {
        id: 9,
        name: 'SuperBank',
        balance: 420000,
        icon: 'PiggyBank',
        color: '#7FDBFF', // Light Blue
        currency: 'idr',
        description: '',
        excludeFromReport: false,
        isArchived: false,
      },
    ],
  },
  {
    category: 'Archived',
    total: 0,
    accounts: [
      {
        id: 10,
        name: 'Ovo',
        icon: 'Package',
        color: '#0074D9', // Blue
        currency: 'idr',
        description: '',
        balance: 250000,
        excludeFromReport: false,
        isArchived: false,
      },
      {
        id: 11,
        name: 'Gopay',
        balance: 500000,
        icon: 'Package2',
        color: '#01FF70', // Lime
        currency: 'idr',
        description: '',
        excludeFromReport: false,
        isArchived: false,
      },
      {
        id: 12,
        name: 'Cash',
        icon: 'Coins',
        color: '#DDDDDD', // Light Gray
        currency: 'idr',
        description: '',
        balance: 250000,
        excludeFromReport: false,
        isArchived: false,
      },
      {
        id: 13,
        name: 'BCA',
        icon: 'Landmark',
        color: '#AAAAAA', // Gray
        currency: 'idr',
        description: '',
        balance: 250000,
        excludeFromReport: false,
        isArchived: false,
      },
      {
        id: 14,
        name: 'Jago',
        balance: 500000,
        icon: 'HandCoins',
        color: '#F012BE', // Fuchsia
        currency: 'idr',
        description: '',
        excludeFromReport: false,
        isArchived: false,
      },
      {
        id: 15,
        name: 'SuperBank',
        balance: 420000,
        icon: 'PiggyBank',
        color: '#001f3f', // Navy
        currency: 'idr',
        description: '',
        excludeFromReport: false,
        isArchived: false,
      },
    ],
  },
];

export { wallets };
