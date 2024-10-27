import { icons } from 'lucide-react-native';

type NavItem = {
  name: string;
  title: string;
  icon: keyof typeof icons;
};

export { NavItem };
