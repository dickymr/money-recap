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

type PickerType = {
  label: string;
  value: string;
};

export { NavItem, ActionRow, PickerType };
