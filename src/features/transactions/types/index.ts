import { icons } from 'lucide-react-native';

type TransactionItemType = {
  id: string;
  icon: keyof typeof icons;
  color: string;
  category: string;
  wallet: string;
  desc: string;
  amount: number;
  budgets: string[];
};

type TransactionType = {
  id: string;
  date: string;
  total: number;
  items: TransactionItemType[];
};

type TransactionListType = {
  id: string;
  periode: string;
  income: number;
  expense: number;
  balance: number;
  transactions: TransactionType[];
};

export { TransactionItemType, TransactionType, TransactionListType };
