import { router } from 'expo-router';
import { Colors, Constants, Dialog, ListItem, Text, View } from 'react-native-ui-lib';

import locales from '@/locales';

import { Icon } from '@/components';

import { walletTypes } from '../constants';

type DialogWalletTypeSelectionProps = {
  isVisible: boolean;
  onDismiss: () => void;
};

const DialogWalletTypeSelection = (props: DialogWalletTypeSelectionProps) => {
  const handleClickDialogItem = (type: 'saving' | 'basic') => {
    onDismiss();
    router.push({ pathname: '/wallets/[id]', params: { id: type } });
  };

  const { isVisible, onDismiss } = props;

  return (
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
      visible={isVisible}
      onDismiss={onDismiss}
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
  );
};

export default DialogWalletTypeSelection;
