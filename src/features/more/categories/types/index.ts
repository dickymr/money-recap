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
  children?: CategoryType[];
};

type CategoriesType = CategoryType & {
  children: CategoryType[];
};

type CategoryFormType = {
  name: string;
  backgroundIcon: string;
  icon: keyof typeof icons;
  type: 'expense' | 'income';
  parent: string;
};

export { CategoryTypeType, CategoryType, CategoriesType, CategoryFormType };
