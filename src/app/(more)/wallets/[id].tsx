import { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import {
  View,
  Text,
  TextField,
  Colors,
  Button,
  Typography,
  ListItem,
  Dividers,
  Switch,
  Picker,
  Incubator,
  Dialog,
  Constants,
} from 'react-native-ui-lib';
import { icons } from 'lucide-react-native';

import locales from '@/locales';

import { AppBar, Icon, IconPicker } from '@/components';

import { currencies, wallets } from '@/constants/dummies';
import { Currency } from '@/constants/types';

interface FormData {
  name: string;
  color: string;
  icon: keyof typeof icons;
  currency: string;
  description: string;
  balance: number;
  excludeFromReport: boolean;
  isArchived: boolean;
}

export default function WalletDetailScreen() {
  const handleClickCurrency = (currency: string) => {
    handleChangeFormData('currency', currency);
  };

  const handleClickDelete = (type: string) => {
    if (type === 'confirm') {
      setModalDeleteShown(true);
    }

    if (type === 'cancel') {
      setModalDeleteShown(false);
    }

    if (type === 'delete') {
      router.back();
    }
  };

  const handleClickSave = () => {
    alert(JSON.stringify(formData));
  };

  const handleChangeFormData = (key: string, value: string | number | boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const determineMode = () => {
    if (id === 'basic' || id === 'saving') return 'add';
    return 'edit';
  };

  const { id } = useLocalSearchParams();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    color: Colors.red30,
    icon: 'Wallet',
    currency: '',
    description: '',
    balance: 0,
    excludeFromReport: false,
    isArchived: false,
  });
  const [modalDeleteShown, setModalDeleteShown] = useState<boolean>(false);

  const mode = determineMode();

  useEffect(() => {
    const account = wallets
      .flatMap((wallet) => wallet.accounts)
      .find((account) => account.id === Number(id));

    if (!account) return;

    setFormData({
      ...formData,
      name: account.name,
      icon: account.icon,
      color: String(account.color),
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

      {/* COLOR ICON PICKER & NAME */}
      <View marginB-10>
        <View height={80} row centerV paddingH-20 bg-$backgroundElevated>
          <Incubator.ExpandableOverlay
            modalProps={{ animationType: 'slide' }}
            expandableContent={
              <IconPicker
                currentColor={formData.color}
                currentIcon={formData.icon}
                onColorChanged={(color) => handleChangeFormData('backgroundColor', color)}
                onIconChanged={(icon) => handleChangeFormData('icon', icon)}
              />
            }
            showTopBar
            topBarProps={{
              title: locales.t('helper.iconPicker.title'),
              doneLabel: locales.t('helper.iconPicker.done'),
            }}
          >
            <Button
              backgroundColor={formData.color}
              size={Button.sizes.large}
              round
              marginR-15
            >
              <Icon name={formData.icon} color={Colors.$textDefault} size={22.5} />
            </Button>
          </Incubator.ExpandableOverlay>
          <TextField
            style={{ ...Typography.text40M }}
            containerStyle={{ flex: 1 }}
            color={Colors.$textDefault}
            placeholder={String(locales.t('more.wallets.detail.placeholderName'))}
            placeholderTextColor={Colors.$textNeutralLight}
            onChangeText={(value) => handleChangeFormData('name', value)}
            value={formData.name}
          />
        </View>
      </View>

      {/* CURRENCY */}
      <View marginB-10>
        <Picker
          items={currencies}
          topBarProps={{
            title: locales.t('helper.currencyPicker.title'),
            cancelButtonProps: {
              iconStyle: { tintColor: Colors.$textDefault, marginLeft: 5 },
            },
          }}
          value={formData.currency}
          onChange={(value) => handleClickCurrency(String(value))}
          enableModalBlur={false}
          renderItem={(value) => {
            const currency: Currency | undefined = currencies.find(
              (item) => item.value === value
            );
            return (
              <View style={[Dividers.d10]} row height={65} centerV paddingH-30>
                <View row flex-1>
                  <View marginR-15>
                    <Text text60>{currency?.flag}</Text>
                  </View>
                  <Text text70 $textDefault>
                    {currency?.label}
                  </Text>
                </View>
                {formData.currency === currency?.value && (
                  <Icon name="Check" color={Colors.$textPrimary} size={22.5} />
                )}
              </View>
            );
          }}
          renderInput={() => (
            <ListItem height={55} activeOpacity={0.5}>
              <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
                <View width={30} height={30} center marginR-15>
                  <Icon name="DollarSign" color={Colors.$textNeutral} size={20} />
                </View>
                <View flex-1>
                  <Text
                    text70
                    color={formData.currency ? Colors.$textDefault : Colors.$textNeutralLight}
                  >
                    {formData.currency
                      ? formData.currency.toUpperCase()
                      : locales.t('more.wallets.detail.placeholderCurrency')}
                  </Text>
                </View>
              </View>
            </ListItem>
          )}
        />
      </View>

      {/* DESCRIPTION */}
      <View height={55} marginB-10>
        <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
          <View width={30} height={30} center marginR-15>
            <Icon name="Notebook" color={Colors.$textNeutral} size={20} />
          </View>
          <TextField
            style={{ ...Typography.text70 }}
            containerStyle={{ flex: 1 }}
            color={Colors.$textDefault}
            placeholder={String(locales.t('more.wallets.detail.placeholderDescription'))}
            placeholderTextColor={Colors.$textNeutralLight}
            onChangeText={(value) => handleChangeFormData('description', value)}
            value={formData.description}
          />
        </View>
      </View>

      {/* INITIAL BALANCE */}
      <View height={55} marginB-10>
        <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
          <View width={30} height={30} center marginR-15>
            <Icon name="ChartNoAxesColumn" color={Colors.$textNeutral} size={20} />
          </View>
          <TextField
            keyboardType="numeric"
            style={{ ...Typography.text70 }}
            containerStyle={{ flex: 1 }}
            color={Colors.$textDefault}
            floatingPlaceholder
            floatOnFocus={true}
            placeholder={String(
              locales.t(
                `more.wallets.detail.placeholder${
                  mode === 'add' ? 'Initial' : 'Current'
                }Balance`
              )
            )}
            placeholderTextColor={Colors.$textNeutralLight}
            onChangeText={(text) =>
              handleChangeFormData('balance', text === '' ? 0 : Number(text))
            }
            value={formData.balance !== undefined ? String(formData.balance) : '0'}
          />
        </View>
      </View>

      {/* EXCLUDE FROM REPORT */}
      <View height={55} marginB-10>
        <View
          style={[Dividers.d10]}
          flex
          row
          centerV
          bg-$backgroundElevated
          paddingL-30
          paddingR-10
        >
          <TextField
            readOnly
            containerStyle={{ flex: 1 }}
            placeholder={String(locales.t('more.wallets.detail.excludeReport'))}
            placeholderTextColor={Colors.$textDefault}
            style={{ ...Typography.text70 }}
          />
          <View width={30} height={30} center marginR-15>
            <Switch
              offColor={Colors.$backgroundPrimaryMedium}
              onColor={Colors.$backgroundPrimaryHeavy}
              thumbStyle={{ backgroundColor: Colors.$backgroundDefault }}
              onValueChange={(value) => handleChangeFormData('excludeFromReport', value)}
              value={formData.excludeFromReport}
            />
          </View>
        </View>
      </View>

      {/* ARCHIVE */}
      <View style={{ display: mode === 'add' ? 'none' : 'flex' }} height={55} marginB-5>
        <View
          style={[Dividers.d10]}
          flex
          row
          centerV
          bg-$backgroundElevated
          paddingL-30
          paddingR-10
        >
          <TextField
            readOnly
            containerStyle={{ flex: 1 }}
            placeholder={String(locales.t('more.wallets.detail.archiveWallet'))}
            placeholderTextColor={Colors.$textDefault}
            style={{ ...Typography.text70 }}
          />
          <View width={30} height={30} center marginR-15>
            <Switch
              offColor={Colors.$backgroundPrimaryMedium}
              onColor={Colors.$backgroundPrimaryHeavy}
              thumbStyle={{ backgroundColor: Colors.$backgroundDefault }}
              onValueChange={(value) => handleChangeFormData('isArchived', value)}
              value={formData.isArchived}
            />
          </View>
        </View>
      </View>

      {/* DELETE BUTTON */}
      <View style={{ display: mode === 'add' ? 'none' : 'flex' }} height={55} marginB-10>
        <View flex row center>
          <Button
            backgroundColor="transparent"
            size={Button.sizes.xSmall}
            onPress={() => handleClickDelete('confirm')}
          >
            <Icon name="Trash2" color={Colors.$iconDanger} size={17.5} />
            <Text text80BO uppercase $textDanger marginL-5>
              {locales.t('more.wallets.detail.delete')}
            </Text>
          </Button>
        </View>
      </View>

      {/* CONFIRM DELETE */}
      <Dialog
        useSafeArea
        center
        height="22.5%"
        panDirection="down"
        containerStyle={{
          backgroundColor: Colors.$backgroundElevated,
          borderRadius: 12,
          marginBottom: Constants.isIphoneX ? 0 : 20,
        }}
        overlayBackgroundColor="rgba(0, 0, 0, 0.5)"
        ignoreBackgroundPress={false}
        visible={modalDeleteShown}
        onDismiss={() => setModalDeleteShown(false)}
      >
        <View flex-1 paddingH-25 paddingV-5>
          <View left marginT-17 marginB-10>
            <Text text70BO $textDefault>
              {locales.t('more.wallets.detail.modalDeleteTitle')}
            </Text>
          </View>
          <View marginB-10>
            <Text text80 $textNeutral>
              {locales.t('more.wallets.detail.modalDeleteDescription')}
            </Text>
          </View>
          <View row absB absR marginB-17 marginR-15>
            <Button
              backgroundColor="transparent"
              size={Button.sizes.xSmall}
              onPress={() => handleClickDelete('cancel')}
            >
              <Text text70R uppercase $textDefault>
                {locales.t('more.wallets.detail.modalDeleteNo')}
              </Text>
            </Button>
            <Button
              backgroundColor="transparent"
              size={Button.sizes.xSmall}
              onPress={() => handleClickDelete('delete')}
            >
              <Text text70BL uppercase $textDanger>
                {locales.t('more.wallets.detail.modalDeleteYes')}
              </Text>
            </Button>
          </View>
        </View>
      </Dialog>
    </>
  );
}
