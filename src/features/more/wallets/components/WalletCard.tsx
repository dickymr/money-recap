import { router } from 'expo-router';

import { Dividers, ListItem, Text, View } from 'react-native-ui-lib';

import locales from '@/locales';

import WalletItem from './WalletItem';

import { WalletCardType } from '../types';

import { formatCurrency } from '../utils';

const WalletCard = ({ category, total, accounts }: WalletCardType) => {
  const handlePressItem = (id: number) => {
    router.push({ pathname: '/wallets/[id]', params: { id } });
  };

  const isArchive = category === 'Archived';

  return (
    <View style={{ opacity: isArchive ? 0.5 : 1 }} marginB-15>
      <ListItem height={45} activeOpacity={1} disabled>
        <View
          style={[Dividers.d10]}
          flex
          row
          centerV
          spread
          bg-$backgroundElevated
          paddingH-20
        >
          <Text text70BO $textDefault>
            {locales.t(`more.wallets.${category.toLowerCase()}`)}
          </Text>
          {!isArchive && (
            <Text text70 $textDefault>
              {formatCurrency(total)}
            </Text>
          )}
        </View>
      </ListItem>
      {accounts.map((account) => (
        <WalletItem key={account.id} data={account} onPress={(id) => handlePressItem(id)} />
      ))}
    </View>
  );
};

export default WalletCard;
