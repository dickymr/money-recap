import { useState } from 'react';
import { router } from 'expo-router';
import {
  View,
  Text,
  ListItem,
  Colors,
  Dividers,
  TouchableOpacity,
  Shadows,
  Dialog,
  Constants,
} from 'react-native-ui-lib';
import { FlashList } from '@shopify/flash-list';

import locales from '@/locales';

import { AppBar, Icon } from '@/components';

import { wallets } from '@/constants/dummies';
import { Wallet, WalletType } from '@/constants/types';

import { formatCurrency } from '@/utils';

const walletTypes: WalletType[] = [
  {
    key: 'saving',
    icon: 'PiggyBank',
    label: locales.t('more.wallets.choiceSaving'),
    desc: locales.t('more.wallets.choiceSavingDesc'),
  },
  {
    key: 'basic',
    icon: 'Wallet',
    label: locales.t('more.wallets.choiceBasic'),
    desc: locales.t('more.wallets.choiceBasicDesc'),
  },
];

export default function WalletScreen() {
  const handlePressItem = (id: number) => {
    router.push({ pathname: '/wallets/[id]', params: { id } });
  };

  const handleClickAdd = () => {
    setShowDialog(true);
  };

  const handleClickDialogItem = (type: 'saving' | 'basic') => {
    setShowDialog(false);
    router.push({ pathname: '/wallets/[id]', params: { id: type } });
  };

  const renderItem = ({ category, total, accounts }: Wallet) => {
    const isArchive = category === 'Archived';

    return (
      <View key={category} style={{ opacity: isArchive ? 0.5 : 1 }} marginB-15>
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
        {accounts.map(({ id, name, balance, icon, color }) => (
          <ListItem
            key={id}
            height={70}
            activeOpacity={0.5}
            onPress={() => handlePressItem(id)}
          >
            <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-20>
              <View width={40} height={40} center backgroundColor={color} br100 marginR-15>
                <Icon name={icon} color={Colors.$textDefault} size={22.5} />
              </View>
              <View>
                <Text text80 $textDefault>
                  {name}
                </Text>
                <Text text80BO $textDefault>
                  {formatCurrency(balance)}
                </Text>
              </View>
            </View>
          </ListItem>
        ))}
      </View>
    );
  };

  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <AppBar title={locales.t('more.wallets.title')} />
      <View flex-1>
        <FlashList
          data={wallets}
          renderItem={({ item }) => renderItem(item)}
          estimatedItemSize={5}
        />
        <View absR absB marginB-22 marginR-22>
          <TouchableOpacity
            br50
            padding-15
            backgroundColor={Colors.$backgroundPrimaryMedium}
            activeOpacity={0.5}
            onPress={handleClickAdd}
            style={[Shadows.sh30.bottom]}
          >
            <Icon name="Plus" color={Colors.$textPrimary} size={25} />
          </TouchableOpacity>
        </View>
        <Dialog
          useSafeArea
          bottom={true}
          height="25%"
          panDirection="down"
          containerStyle={{
            backgroundColor: Colors.$backgroundElevated,
            borderRadius: 12,
            marginBottom: Constants.isIphoneX ? 0 : 20,
          }}
          overlayBackgroundColor="rgba(0, 0, 0, 0.5)"
          ignoreBackgroundPress={false}
          visible={showDialog}
          onDismiss={() => setShowDialog(false)}
        >
          <View flex-1>
            <View left marginT-17 marginB-5 paddingL-25>
              <Text text80M $textNeutral>
                {locales.t('more.wallets.choiceTitle')}
              </Text>
            </View>
            <View flex paddingH-10 marginB-10>
              {walletTypes.map((wallet) => (
                <ListItem
                  key={wallet.key}
                  flex-2
                  centerV
                  activeOpacity={0.5}
                  onPress={() => handleClickDialogItem(wallet.key)}
                >
                  <View height="100%" flex row centerV bg-$backgroundElevated paddingH-10>
                    <View width={60} height={60} center br100 marginR-10>
                      <Icon name={wallet.icon} color={Colors.$iconNeutral} size={35} />
                    </View>
                    <View>
                      <Text text70M $textDefault>
                        {wallet.label}
                      </Text>
                      <Text text80 $textNeutral>
                        {wallet.desc}
                      </Text>
                    </View>
                  </View>
                </ListItem>
              ))}
            </View>
          </View>
        </Dialog>
      </View>
    </>
  );
}
