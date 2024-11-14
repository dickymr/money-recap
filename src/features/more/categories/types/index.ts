import { icons } from 'lucide-react-native';

type CategoryTypeType = {
  key: 'expense' | 'income';
  icon: keyof typeof icons;
  label: string;
  desc: string;
};

type CategoryType = {
  id: number;
  name: string;
  icon: keyof typeof icons;
  color: string;
  type: 'expense' | 'income';
};

type CategoriesType = CategoryType & {
  children: CategoryType[];
};

export { CategoryTypeType, CategoryType, CategoriesType };
