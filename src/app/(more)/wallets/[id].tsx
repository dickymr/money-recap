import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
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
}

export default function WalletDetailScreen() {
  const handleClickCurrency = (currency: string) => {
    handleChangeFormData('currency', currency);
  };

  const handleSubmit = () => {
    if (mode === 'view') {
      setMode('edit');
      return;
    }

    alert(JSON.stringify(formData));
  };

  const handleChangeFormData = (key: string, value: string | number | boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const determineMode = () => {
    if (id === 'basic' || id === 'saving') return 'add';
    return 'view';
  };

  const { id } = useLocalSearchParams();

  const [mode, setMode] = useState(determineMode());
  const [formData, setFormData] = useState<FormData>({
    name: '',
    color: Colors.red30,
    icon: 'Wallet',
    currency: '',
    description: '',
    balance: 0,
    excludeFromReport: false,
  });

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
      excludeFromReport: account.excludeFromReport,
    });
  }, []);

  return (
    <>
      <AppBar
        title={locales.t('more.wallets.add.title')}
        sectionRight={() => (
          <Button
            backgroundColor={Colors.$backgroundPrimaryMedium}
            size={Button.sizes.xSmall}
            onPress={handleSubmit}
          >
            <Text color={Colors.$textNeutral} text80H>
              {locales.t(mode === 'view' ? 'more.wallets.add.edit' : 'more.wallets.add.save')}
            </Text>
          </Button>
        )}
      />

      {/* COLOR ICON PICKER & NAME */}
      <View marginB-10>
        <View height={80} row centerV paddingH-20 bg-$backgroundElevated>
          <Incubator.ExpandableOverlay
            disabled={mode === 'view'}
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
            readOnly={mode === 'view'}
            style={{ ...Typography.text40M }}
            containerStyle={{ flex: 1 }}
            color={mode === 'view' ? Colors.$textNeutral : Colors.$textDefault}
            placeholder={String(locales.t('more.wallets.add.placeholderName'))}
            placeholderTextColor={Colors.$textNeutralLight}
            onChangeText={(value) => handleChangeFormData('name', value)}
            value={formData.name}
          />
        </View>
      </View>

      {/* CURRENCY */}
      <View style={{ pointerEvents: mode === 'view' ? 'none' : 'auto' }} marginB-10>
        <Picker
          items={currencies}
          topBarProps={{ title: locales.t('helper.currencyPicker.title') }}
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
                  <Text text70>{currency?.label}</Text>
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
                  <Icon name="DollarSign" color={Colors.$textNeutralLight} size={20} />
                </View>
                <View flex-1>
                  <Text
                    text70
                    color={
                      mode === 'view'
                        ? Colors.$textNeutral
                        : formData.currency
                        ? Colors.$textDefault
                        : Colors.$textNeutralLight
                    }
                  >
                    {formData.currency
                      ? formData.currency.toUpperCase()
                      : locales.t('more.wallets.add.placeholderCurrency')}
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
            <Icon name="Notebook" color={Colors.$textNeutralLight} size={20} />
          </View>
          <TextField
            readOnly={mode === 'view'}
            style={{ ...Typography.text70 }}
            containerStyle={{ flex: 1 }}
            color={mode === 'view' ? Colors.$textNeutral : Colors.$textDefault}
            placeholder={String(locales.t('more.wallets.add.placeholderDescription'))}
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
            <Icon name="ChartNoAxesColumn" color={Colors.$textNeutralLight} size={20} />
          </View>
          <TextField
            readOnly={mode === 'view'}
            keyboardType="numeric"
            style={{ ...Typography.text70 }}
            containerStyle={{ flex: 1 }}
            color={mode === 'view' ? Colors.$textNeutral : Colors.$textDefault}
            floatingPlaceholder
            floatOnFocus={true}
            placeholder={String(locales.t('more.wallets.add.placeholderBalance'))}
            placeholderTextColor={Colors.$textNeutralLight}
            onChangeText={(text) =>
              handleChangeFormData('balance', text === '' ? 0 : Number(text))
            }
            value={formData.balance !== undefined ? String(formData.balance) : '0'}
          />
        </View>
      </View>

      {/* EXCLUDE FROM REPORT */}
      <View height={55}>
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
            placeholder={String(locales.t('more.wallets.add.excludeReport'))}
            placeholderTextColor={Colors.$textNeutral}
            style={{ ...Typography.text70 }}
          />
          <View width={30} height={30} center marginR-15>
            <Switch
              disabled={mode === 'view'}
              disabledColor={
                Colors[
                  formData.excludeFromReport
                    ? '$backgroundPrimaryMedium'
                    : '$backgroundPrimaryLight'
                ]
              }
              offColor={Colors.$backgroundPrimaryLight}
              onColor={Colors.$backgroundPrimaryMedium}
              thumbStyle={{
                backgroundColor: formData.excludeFromReport
                  ? Colors.$textNeutralLight
                  : Colors.$textDisabled,
              }}
              onValueChange={(value) => handleChangeFormData('excludeFromReport', value)}
              value={formData.excludeFromReport}
            />
          </View>
        </View>
      </View>
    </>
  );
}
