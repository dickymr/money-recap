import { useState } from 'react';
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

import { currencies } from '@/constants/dummies';
import { Currency } from '@/constants/types';

interface FormData {
  name: string;
  backgroundColor: string;
  icon: keyof typeof icons;
  currency: string;
  description: string;
  balance: number;
  excludeFromReport: boolean;
}

export default function WalletAddScreen() {
  const handleClickCurrency = (currency: string) => {
    handleChangeFormData('currency', currency);
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formData));
  };

  const handleChangeFormData = (key: string, value: string | number | boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const [formData, setFormData] = useState<FormData>({
    name: '',
    backgroundColor: Colors.red30,
    icon: 'Wallet',
    currency: '',
    description: '',
    balance: 0,
    excludeFromReport: false,
  });

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
              {locales.t('more.wallets.add.save')}
            </Text>
          </Button>
        )}
      />

      {/* COLOR ICON PICKER & NAME */}
      <View marginB-10>
        <View height={80} row centerV paddingH-20 bg-$backgroundElevated>
          <Incubator.ExpandableOverlay
            modalProps={{ animationType: 'slide' }}
            expandableContent={
              <IconPicker
                currentColor={formData.backgroundColor}
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
              backgroundColor={formData.backgroundColor}
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
            placeholder={String(locales.t('more.wallets.add.placeholderName'))}
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
                    color={formData.currency ? Colors.$textDefault : Colors.$textNeutralLight}
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
            style={{ ...Typography.text70 }}
            containerStyle={{ flex: 1 }}
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
            keyboardType="numeric"
            style={{ ...Typography.text70 }}
            containerStyle={{ flex: 1 }}
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
