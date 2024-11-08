import { View, Text } from 'react-native-ui-lib';

import locales from '@/locales';

import { AppBar } from '@/components';

export default function HomeScreen() {
  return (
    <>
      <AppBar title={locales.t('home.title')} />
      <View flex center>
        <Text text60 $textPrimary>
          {locales.t('home.title')}
        </Text>
      </View>
    </>
  );
}
