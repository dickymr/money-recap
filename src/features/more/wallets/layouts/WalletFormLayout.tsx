import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, Colors, Button } from 'react-native-ui-lib';

import locales from '@/locales';

import { AppBar, Icon } from '@/components';

import WalletForm from '../components/WalletForm';
import DialogConfirmDelete from '../components/DialogConfirmDelete';

import { wallets } from '../mocks';
import { WalletFormType } from '../types';
import { backgroundIconList } from '~/src/constants';

const WalletFormLayout = () => {
  const handleClickSave = () => {
    alert(JSON.stringify(form));
  };

  const determineMode = () => {
    if (id === 'basic' || id === 'saving') return 'add';
    return 'edit';
  };

  const { id } = useLocalSearchParams();

  const [isDeleteDialogShown, setIsDeleteDialogShown] = useState<boolean>(false);
  const [form, setForm] = useState<WalletFormType>({
    name: '',
    backgroundIcon: backgroundIconList[0],
    icon: 'Wallet',
    currency: '',
    description: '',
    balance: 0,
    excludeFromReport: false,
    isArchived: false,
  });

  const mode = determineMode();

  useEffect(() => {
    const account = wallets
      .flatMap((wallet) => wallet.accounts)
      .find((account) => account.id === Number(id));

    if (!account) return;

    setForm({
      ...form,
      name: account.name,
      backgroundIcon: String(account.color),
      icon: account.icon,
      currency: account.currency,
      description: account.description,
      balance: account.balance,
      excludeFromReport: account.excludeFromReport,
      isArchived: account.isArchived,
    });
  }, []);

  return (
    <>
      <AppBar
        title={
          mode === 'add'
            ? locales.t('more.wallets.detail.titleAdd')
            : locales.t('more.wallets.detail.titleEdit')
        }
        sectionRight={() => (
          <View row>
            <Button
              backgroundColor={Colors.$backgroundPrimary}
              size={Button.sizes.xSmall}
              onPress={handleClickSave}
              paddingV-7
              paddingH-12
            >
              <Icon name="Save" color={Colors.$textDefaultLight} size={15} />
              <Text text90BO uppercase $textDefaultLight marginL-5>
                {locales.t('more.wallets.detail.save')}
              </Text>
            </Button>
          </View>
        )}
      />

      <WalletForm mode={mode} form={form} setForm={setForm} />

      {/* DELETE BUTTON */}
      <View style={{ display: mode === 'add' ? 'none' : 'flex' }} height={55} marginB-10>
        <View flex row center>
          <Button
            backgroundColor="transparent"
            size={Button.sizes.xSmall}
            onPress={() => setIsDeleteDialogShown(true)}
          >
            <Icon name="Trash2" color={Colors.$iconDanger} size={17.5} />
            <Text text80BO uppercase $textDanger marginL-5>
              {locales.t('more.wallets.detail.delete')}
            </Text>
          </Button>
        </View>
      </View>

      {/* CONFIRM DELETE */}
      <DialogConfirmDelete
        isVisible={isDeleteDialogShown}
        onDismiss={() => setIsDeleteDialogShown(false)}
      />
    </>
  );
};

export default WalletFormLayout;
