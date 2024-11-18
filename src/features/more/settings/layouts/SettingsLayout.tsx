import { useState } from 'react';
import { View } from 'react-native-ui-lib';

import locales from '@/locales';

import { AppBar } from '@/components';

import SettingCardList from '../components/SettingCardList';

import { SettingType } from '../types';

const SettingsLayout = () => {
  const [setting, setSetting] = useState<SettingType>({
    language: 'default',
    theme: 'light',
    currency: 'IDR',
    currencyFormat: '-Rp 1.123.456,89',
    dateFormat: 'DD/MM/YYYY',
    firstDayOfWeek: 'sunday',
    firstDayOfMonth: '25',
  });

  return (
    <>
      <AppBar title={locales.t('more.settings.title')} />
      <View flex-1>
        <SettingCardList setting={setting} setSetting={setSetting} />
      </View>
    </>
  );
};

export default SettingsLayout;
