import { View } from 'react-native-ui-lib';

import locales from '@/locales';

import { AppBar } from '@/components';

import ToolCardList from '../components/ToolCardList';

const ToolsLayout = () => {
  return (
    <>
      <AppBar title={locales.t('more.tools.title')} />
      <View flex-1>
        <ToolCardList />
      </View>
    </>
  );
};

export default ToolsLayout;
