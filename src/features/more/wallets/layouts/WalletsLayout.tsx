import { useState } from 'react';
import { View } from 'react-native-ui-lib';

import locales from '@/locales';

import { AppBar, FloatingButton } from '@/components';

import DialogWalletTypeSelection from '../components/DialogWalletTypeSelection';
import WalletCardList from '../components/WalletCardList';

const WalletsLayout = () => {
  const [isSelectionDialogShown, setIsSelectionDialogShown] = useState<boolean>(false);

  return (
    <>
      <AppBar title={locales.t('more.wallets.title')} />
      <View flex-1>
        <WalletCardList />
        <View absR absB marginB-22 marginR-22>
          <FloatingButton onPress={() => setIsSelectionDialogShown(true)} />
        </View>
        <DialogWalletTypeSelection
          isVisible={isSelectionDialogShown}
          onDismiss={() => setIsSelectionDialogShown(false)}
        />
      </View>
    </>
  );
};

export default WalletsLayout;
