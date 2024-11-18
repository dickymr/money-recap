import { Colors, Text, View } from 'react-native-ui-lib';

import locales from '@/locales';

import { AppBar, Icon } from '@/components';

const AccountLayout = () => {
  return (
    <>
      <AppBar title={locales.t('more.account.title')} />
      <View flex-1 center>
        <View marginB-10>
          <Icon name="Construction" color={Colors.$textNeutral} size={70} />
        </View>
        <Text text70R>Underconstruction</Text>
      </View>
    </>
  );
};

export default AccountLayout;
