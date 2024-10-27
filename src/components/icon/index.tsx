import { StyleProp, ViewStyle } from 'react-native';
import { icons } from 'lucide-react-native';

type IconProps = {
  style?: StyleProp<ViewStyle>;
  name: keyof typeof icons;
  color?: string;
  size?: number;
};

const Icon = ({ style = {}, name, color, size, ...rest }: IconProps) => {
  const LucideIcon = icons[name];
  return <LucideIcon style={style} color={color} size={size} {...rest} />;
};

export default Icon;
