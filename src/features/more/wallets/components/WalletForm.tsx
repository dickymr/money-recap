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

import locales from '@/locales';

import { Icon, IconPicker } from '@/components';

import { currencies } from '../constants';

import { CurrencyType, WalletFormType } from '../types';

type WalletFormProps = {
  mode: 'add' | 'edit';
  form: WalletFormType;
  setForm: React.Dispatch<React.SetStateAction<WalletFormType>>;
};

const WalletForm = ({ mode, form, setForm }: WalletFormProps) => {
  const handleClickCurrency = (currency: string) => {
    updateForm('currency', currency);
  };

  const updateForm = (key: string, value: string | number | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      {/* COLOR ICON PICKER & NAME */}
      <View marginB-10>
        <View height={80} row centerV paddingH-20 bg-$backgroundElevated>
          <Incubator.ExpandableOverlay
            modalProps={{ animationType: 'slide' }}
            expandableContent={
              <IconPicker
                currentColor={form.backgroundIcon}
                currentIcon={form.icon}
                onColorChanged={(color) => updateForm('backgroundIcon', color)}
                onIconChanged={(icon) => updateForm('icon', icon)}
              />
            }
            showTopBar
            topBarProps={{
              title: locales.t('helper.iconPicker.title'),
              doneLabel: locales.t('helper.iconPicker.done'),
            }}
          >
            <Button
              backgroundColor={form.backgroundIcon}
              size={Button.sizes.large}
              round
              marginR-15
            >
              <Icon
                name={form.icon}
                color={
                  Colors.isDark(form.backgroundIcon)
                    ? Colors.$textDefaultLight
                    : Colors.$textDefault
                }
                size={22.5}
              />
            </Button>
          </Incubator.ExpandableOverlay>
          <TextField
            style={{ ...Typography.text40M }}
            containerStyle={{ flex: 1 }}
            color={Colors.$textDefault}
            placeholder={String(locales.t('more.wallets.detail.placeholderName'))}
            placeholderTextColor={Colors.$textNeutralLight}
            onChangeText={(value) => updateForm('name', value)}
            value={form.name}
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
          value={form.currency}
          onChange={(value) => handleClickCurrency(String(value))}
          enableModalBlur={false}
          renderItem={(value) => {
            const currency: CurrencyType | undefined = currencies.find(
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
                {form.currency === currency?.value && (
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
                    color={form.currency ? Colors.$textDefault : Colors.$textNeutralLight}
                  >
                    {form.currency
                      ? form.currency.toUpperCase()
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
            onChangeText={(value) => updateForm('description', value)}
            value={form.description}
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
            onChangeText={(text) => updateForm('balance', text === '' ? 0 : Number(text))}
            value={form.balance !== undefined ? String(form.balance) : '0'}
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
              onValueChange={(value) => updateForm('excludeFromReport', value)}
              value={form.excludeFromReport}
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
              onValueChange={(value) => updateForm('isArchived', value)}
              value={form.isArchived}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default WalletForm;
