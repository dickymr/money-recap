import React from 'react';
import { Spacings, View } from 'react-native-ui-lib';
import { FlashList } from '@shopify/flash-list';

import TransactionCard from './TransactionCard';
import BalanceCard from './BalanceCard';

import { TransactionType } from '../types';

type TransactionCardListProps = {
  id: string;
  filterSectionShown: boolean;
  transactions: TransactionType[] | undefined;
  income: number;
  expense: number;
  balance: number;
};

const TransactionCardList = ({
  id,
  filterSectionShown,
  transactions,
  income,
  expense,
  balance,
}: TransactionCardListProps) => {
  const totalItems = transactions?.length || 0;

  return (
    <View style={{ marginTop: Spacings.s10 * (filterSectionShown ? 1.3 : 0) }} flex-1>
      <FlashList
        data={transactions}
        renderItem={({ item, index }) => {
          return (
            <>
              <BalanceCard index={index} income={income} expense={expense} balance={balance} />
              <TransactionCard transaction={item} />
            </>
          );
        }}
        estimatedItemSize={totalItems}
      />
    </View>
  );
};

export default React.memo(TransactionCardList);
