import {
  View,
  Text,
  TextField,
  Colors,
  Typography,
  ListItem,
  Dividers,
  Picker,
} from 'react-native-ui-lib';

import locales from '@/locales';

import { Icon } from '@/components';

import {
  currencies,
  currencyFormats,
  dateFormats,
  firstDayofMonths,
  firstDayofWeeks,
  languages,
  themes,
} from '../constants';

import { SettingType } from '../types';

type SettingCardListProps = {
  setting: SettingType;
  setSetting: React.Dispatch<React.SetStateAction<SettingType>>;
};

const SettingCardList = ({ setting, setSetting }: SettingCardListProps) => {
  const updateSetting = (key: string, value: string | number | boolean) => {
    setSetting((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      {/* Language */}
      <View paddingT-2>
        <Picker
          items={languages}
          topBarProps={{
            title: locales.t('helper.languagePicker.title'),
            cancelButtonProps: {
              iconStyle: { tintColor: Colors.$textDefault, marginLeft: 5 },
            },
          }}
          value={setting.language}
          onChange={(value) => updateSetting('language', String(value))}
          enableModalBlur={false}
          renderItem={(value, itemProps, label) => (
            <View style={[Dividers.d10]} row height={65} centerV paddingH-30>
              <View row flex-1>
                <Text text70>{label}</Text>
              </View>
              {value === setting.language && (
                <Icon name="Check" color={Colors.$textNeutral} size={22.5} />
              )}
            </View>
          )}
          renderInput={() => (
            <ListItem height={60} activeOpacity={0.5}>
              <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
                <View width={30} height={30} center marginR-15>
                  <Icon name="Languages" color={Colors.$textNeutral} size={22.5} />
                </View>
                <View flex-1 centerV>
                  <TextField
                    style={{
                      ...Typography.text60R,
                      textTransform:
                        setting.language === 'default' ? 'capitalize' : 'uppercase',
                    }}
                    containerStyle={{ flex: 1, justifyContent: 'center', paddingBottom: 2.5 }}
                    floatingPlaceholder
                    floatOnFocus={true}
                    placeholder={String(locales.t('more.settings.placeholderLanguage'))}
                    floatingPlaceholderColor={Colors.$textNeutral}
                    floatingPlaceholderStyle={{ paddingBottom: 2.5 }}
                    color={Colors.$textDefault}
                    value={setting.language}
                  />
                </View>
              </View>
            </ListItem>
          )}
        />
      </View>

      {/* Theme */}
      <View marginB-10>
        <Picker
          items={themes}
          topBarProps={{
            title: locales.t('helper.themePicker.title'),
            cancelButtonProps: {
              iconStyle: { tintColor: Colors.$textDefault, marginLeft: 5 },
            },
          }}
          value={setting.theme}
          onChange={(value) => updateSetting('theme', String(value))}
          enableModalBlur={false}
          renderItem={(value, itemProps, label) => (
            <View style={[Dividers.d10]} row height={65} centerV paddingH-30>
              <View row flex-1>
                <Text text70>{label}</Text>
              </View>
              {value === setting.theme && (
                <Icon name="Check" color={Colors.$textNeutral} size={22.5} />
              )}
            </View>
          )}
          renderInput={() => (
            <ListItem height={60} activeOpacity={0.5}>
              <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
                <View width={30} height={30} center marginR-15>
                  <Icon name="Paintbrush" color={Colors.$textNeutral} size={22.5} />
                </View>
                <View flex-1 centerV>
                  <TextField
                    style={{ ...Typography.text60R }}
                    containerStyle={{ flex: 1, justifyContent: 'center', paddingBottom: 2.5 }}
                    floatingPlaceholder
                    floatOnFocus={true}
                    placeholder={String(locales.t('more.settings.placeholderTheme'))}
                    floatingPlaceholderColor={Colors.$textNeutral}
                    floatingPlaceholderStyle={{ paddingBottom: 2.5 }}
                    color={Colors.$textDefault}
                    value={String(locales.t(`general.${setting.theme}`))}
                  />
                </View>
              </View>
            </ListItem>
          )}
        />
      </View>

      {/* Currency */}
      <View>
        <Picker
          items={currencies}
          topBarProps={{
            title: locales.t('helper.currencyPicker.title'),
            cancelButtonProps: {
              iconStyle: { tintColor: Colors.$textDefault, marginLeft: 5 },
            },
          }}
          value={setting.currency}
          onChange={(value) => updateSetting('currency', String(value))}
          enableModalBlur={false}
          renderItem={(value, itemProps, label) => (
            <View style={[Dividers.d10]} row height={65} centerV paddingH-30>
              <View row flex-1>
                <Text text70>{label}</Text>
              </View>
              {value === setting.currency && (
                <Icon name="Check" color={Colors.$textNeutral} size={22.5} />
              )}
            </View>
          )}
          renderInput={() => (
            <ListItem height={60} activeOpacity={0.5}>
              <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
                <View width={30} height={30} center marginR-15>
                  <Icon name="DollarSign" color={Colors.$textNeutral} size={22.5} />
                </View>
                <View flex-1 centerV>
                  <TextField
                    style={{ ...Typography.text60R }}
                    containerStyle={{ flex: 1, justifyContent: 'center', paddingBottom: 2.5 }}
                    floatingPlaceholder
                    floatOnFocus={true}
                    placeholder={String(locales.t('more.settings.placeholderDefaultCurrency'))}
                    floatingPlaceholderColor={Colors.$textNeutral}
                    floatingPlaceholderStyle={{ paddingBottom: 2.5 }}
                    color={Colors.$textDefault}
                    value={setting.currency}
                  />
                </View>
              </View>
            </ListItem>
          )}
        />
      </View>

      {/* Currency Format */}
      <View marginB-10>
        <Picker
          items={currencyFormats}
          topBarProps={{
            title: locales.t('helper.currencyFormatPicker.title'),
            cancelButtonProps: {
              iconStyle: { tintColor: Colors.$textDefault, marginLeft: 5 },
            },
          }}
          value={setting.currencyFormat}
          onChange={(value) => updateSetting('currencyFormat', String(value))}
          enableModalBlur={false}
          renderItem={(value, itemProps, label) => (
            <View style={[Dividers.d10]} row height={65} centerV paddingH-30>
              <View row flex-1>
                <Text text70>{label}</Text>
              </View>
              {value === setting.currencyFormat && (
                <Icon name="Check" color={Colors.$textNeutral} size={22.5} />
              )}
            </View>
          )}
          renderInput={() => (
            <ListItem height={60} activeOpacity={0.5}>
              <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
                <View width={30} height={30} center marginR-15>
                  <Icon name="Ampersand" color={Colors.$textNeutral} size={22.5} />
                </View>
                <View flex-1 centerV>
                  <TextField
                    style={{ ...Typography.text60R }}
                    containerStyle={{ flex: 1, justifyContent: 'center', paddingBottom: 2.5 }}
                    floatingPlaceholder
                    floatOnFocus={true}
                    placeholder={String(locales.t('more.settings.placeholderCurrencyFormat'))}
                    floatingPlaceholderColor={Colors.$textNeutral}
                    floatingPlaceholderStyle={{ paddingBottom: 2.5 }}
                    color={Colors.$textDefault}
                    value={setting.currencyFormat}
                  />
                </View>
              </View>
            </ListItem>
          )}
        />
      </View>

      {/* Date Format */}
      <View>
        <Picker
          items={dateFormats}
          topBarProps={{
            title: locales.t('helper.dateFormatPicker.title'),
            cancelButtonProps: {
              iconStyle: { tintColor: Colors.$textDefault, marginLeft: 5 },
            },
          }}
          value={setting.dateFormat}
          onChange={(value) => updateSetting('dateFormat', String(value))}
          enableModalBlur={false}
          renderItem={(value, itemProps, label) => (
            <View style={[Dividers.d10]} row height={65} centerV paddingH-30>
              <View row flex-1>
                <Text text70>{label}</Text>
              </View>
              {value === setting.dateFormat && (
                <Icon name="Check" color={Colors.$textNeutral} size={22.5} />
              )}
            </View>
          )}
          renderInput={() => (
            <ListItem height={60} activeOpacity={0.5}>
              <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
                <View width={30} height={30} center marginR-15>
                  <Icon name="Nut" color={Colors.$textNeutral} size={22.5} />
                </View>
                <View flex-1 centerV>
                  <TextField
                    style={{ ...Typography.text60R }}
                    containerStyle={{ flex: 1, justifyContent: 'center', paddingBottom: 2.5 }}
                    floatingPlaceholder
                    floatOnFocus={true}
                    placeholder={String(locales.t('more.settings.placeholderDateFormat'))}
                    floatingPlaceholderColor={Colors.$textNeutral}
                    floatingPlaceholderStyle={{ paddingBottom: 2.5 }}
                    color={Colors.$textDefault}
                    value={setting.dateFormat}
                  />
                </View>
              </View>
            </ListItem>
          )}
        />
      </View>

      {/* First Day of Week */}
      <View>
        <Picker
          items={firstDayofWeeks}
          topBarProps={{
            title: locales.t('helper.firstDayOfWeekPicker.title'),
            cancelButtonProps: {
              iconStyle: { tintColor: Colors.$textDefault, marginLeft: 5 },
            },
          }}
          value={setting.firstDayOfWeek}
          onChange={(value) => updateSetting('firstDayOfWeek', String(value))}
          enableModalBlur={false}
          renderItem={(value, itemProps, label) => (
            <View style={[Dividers.d10]} row height={65} centerV paddingH-30>
              <View row flex-1>
                <Text text70>{label}</Text>
              </View>
              {value === setting.firstDayOfWeek && (
                <Icon name="Check" color={Colors.$textNeutral} size={22.5} />
              )}
            </View>
          )}
          renderInput={() => (
            <ListItem height={60} activeOpacity={0.5}>
              <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
                <View width={30} height={30} center marginR-15>
                  <Icon name="Calendar" color={Colors.$textNeutral} size={22.5} />
                </View>
                <View flex-1 centerV>
                  <TextField
                    style={{ ...Typography.text60R }}
                    containerStyle={{ flex: 1, justifyContent: 'center', paddingBottom: 2.5 }}
                    floatingPlaceholder
                    floatOnFocus={true}
                    placeholder={String(locales.t('more.settings.placeholderFirstDayOfWeek'))}
                    floatingPlaceholderColor={Colors.$textNeutral}
                    floatingPlaceholderStyle={{ paddingBottom: 2.5 }}
                    color={Colors.$textDefault}
                    value={setting.firstDayOfWeek}
                  />
                </View>
              </View>
            </ListItem>
          )}
        />
      </View>

      {/* First Day of Month */}
      <View>
        <Picker
          items={firstDayofMonths}
          topBarProps={{
            title: locales.t('helper.firstDayOfMonthPicker.title'),
            cancelButtonProps: {
              iconStyle: { tintColor: Colors.$textDefault, marginLeft: 5 },
            },
          }}
          value={setting.firstDayOfMonth}
          onChange={(value) => updateSetting('firstDayOfMonth', String(value))}
          enableModalBlur={false}
          renderItem={(value, itemProps, label) => (
            <View style={[Dividers.d10]} row height={65} centerV paddingH-30>
              <View row flex-1>
                <Text text70>{label}</Text>
              </View>
              {value === setting.firstDayOfMonth && (
                <Icon name="Check" color={Colors.$textNeutral} size={22.5} />
              )}
            </View>
          )}
          renderInput={() => (
            <ListItem height={60} activeOpacity={0.5}>
              <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
                <View width={30} height={30} center marginR-15>
                  <Icon name="Calendar1" color={Colors.$textNeutral} size={22.5} />
                </View>
                <View flex-1 centerV>
                  <TextField
                    style={{ ...Typography.text60R }}
                    containerStyle={{ flex: 1, justifyContent: 'center', paddingBottom: 2.5 }}
                    floatingPlaceholder
                    floatOnFocus={true}
                    placeholder={String(locales.t('more.settings.placeholderFirstDayOfMonth'))}
                    floatingPlaceholderColor={Colors.$textNeutral}
                    floatingPlaceholderStyle={{ paddingBottom: 2.5 }}
                    color={Colors.$textDefault}
                    value={setting.firstDayOfMonth}
                  />
                </View>
              </View>
            </ListItem>
          )}
        />
      </View>
    </>
  );
};

export default SettingCardList;
