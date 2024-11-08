import { View, Text } from 'react-native-ui-lib';

import locales from '@/locales';

import { AppBar } from '@/components';

export default function BudgetScreen() {
  return (
    <>
      <AppBar title={locales.t('budget.title')} />
      <View flex center>
        <Text text60 $textPrimary>
          {locales.t('budget.title')}
        </Text>
      </View>
    </>
  );
}
