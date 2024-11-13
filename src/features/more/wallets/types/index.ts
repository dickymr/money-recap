import { icons } from 'lucide-react-native';

type WalletCardType = {
  category: 'Basic' | 'Saving' | 'Archived';
  total: number;
  accounts: WalletItemType[];
};

type WalletItemType = {
  id: number;
  name: string;
  icon: keyof typeof icons;
  color: string;
  currency: string;
  description: string;
  balance: number;
  excludeFromReport: boolean;
  isArchived: boolean;
};

type WalletTypeSelectionType = {
  key: 'saving' | 'basic';
  icon: keyof typeof icons;
  label: string;
  desc: string;
};

type WalletFormType = {
  name: string;
  backgroundIcon: string;
  icon: keyof typeof icons;
  currency: string;
  description: string;
  balance: number;
  excludeFromReport: boolean;
  isArchived: boolean;
};

type CurrencyType = {
  label: string;
  value: string;
  flag: string;
};

export {
  WalletCardType,
  WalletItemType,
  WalletTypeSelectionType,
  WalletFormType,
  CurrencyType,
};
