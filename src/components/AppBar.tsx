import { useEffect } from 'react';
import { useNavigation } from 'expo-router';

interface AppBarProps {
  title: string;
  align?: 'left' | 'center' | 'right';
  shadowVisible?: boolean;
  sectionLeft?: () => JSX.Element;
  sectionRight?: () => JSX.Element;
}

const AppBar = ({
  title,
  align = 'left',
  shadowVisible = true,
  sectionLeft,
  sectionRight,
}: AppBarProps) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerTitleAlign: align,
      headerTitleStyle: { fontSize: 18 },
      headerShadowVisible: shadowVisible,
      headerRight: sectionRight,
      headerLeft: sectionLeft,
    });
  }, [navigation, title, align, sectionLeft, sectionRight]);

  return null;
};

export default AppBar;
