import { View, Text } from 'react-native-ui-lib';

import locales from '@/locales';

import { AppBar } from '@/components';

export default function TransactionScreen() {
  return (
    <>
      <AppBar title={locales.t('transaction.title')} />
      <View flex center>
        <Text text60 $textPrimary>
          {locales.t('transaction.title')}
        </Text>
      </View>
    </>
  );
}
