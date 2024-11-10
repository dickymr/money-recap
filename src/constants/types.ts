import { icons } from 'lucide-react-native';

type NavItem = {
  name: string;
  title: string;
  icon: keyof typeof icons;
};

type ActionRow = {
  row: number;
  items: {
    text: string;
    icon: keyof typeof icons;
    path: string;
  }[];
};

type Wallet = {
  category: 'Basic' | 'Saving' | 'Archived';
  total: number;
  accounts: {
    name: string;
    balance: number;
    icon: keyof typeof icons;
    color?: string;
  }[];
};

type WalletType = {
  key: 'saving' | 'basic';
  icon: keyof typeof icons;
  label: string;
  desc: string;
};

type Category = {
  name: string;
  icon: keyof typeof icons;
  color: string;
  children: {
    name: string;
    icon: keyof typeof icons;
    color: string;
  }[];
};

type CategoryType = {
  key: 'expense' | 'income';
  icon: keyof typeof icons;
  label: string;
  desc: string;
};

export { NavItem, ActionRow, Wallet, WalletType, Category, CategoryType };
