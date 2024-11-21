import { Text, View } from 'react-native-ui-lib';

import locales from '@/locales';

import { formatCurrency } from '@/utils';

type BalanceCardProps = {
  index: number;
  income: number;
  expense: number;
  balance: number;
};

const BalanceCard = ({ index, income, expense, balance }: BalanceCardProps) => {
  return (
    <View
      style={{ display: index === 0 ? 'flex' : 'none' }}
      row
      bg-$backgroundElevated
      marginB-5
      paddingV-8
    >
      <View flex-1 center>
        <Text text90R $textNeutral>
          {locales.t('general.income')}
        </Text>
        <Text text70 $textPrimary>
          {formatCurrency(income)}
        </Text>
      </View>
      <View flex-1 center>
        <Text text90R $textNeutral>
          {locales.t('general.expense')}
        </Text>
        <Text text70 $textDanger>
          {formatCurrency(expense)}
        </Text>
      </View>
      <View flex-1 center>
        <Text text90R $textNeutral>
          {locales.t('general.balance')}
        </Text>
        <Text text70 $textDefault>
          {formatCurrency(balance)}
        </Text>
      </View>
    </View>
  );
};

export default BalanceCard;
