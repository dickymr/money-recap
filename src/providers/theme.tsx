import { useColorScheme } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

export default function Theme({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme() || 'default';
  Colors.setScheme(colorScheme);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {children}
    </ThemeProvider>
  );
}
