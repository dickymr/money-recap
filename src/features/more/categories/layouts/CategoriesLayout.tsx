import { useState } from 'react';

import { View } from 'react-native-ui-lib';

import locales from '@/locales';

import { AppBar, FloatingButton } from '@/components';

import Tab from '../components/Tab';
import DialogCategoryTypeSelection from '../components/DialogCategoryTypeSelection';

const CategoriesLayout = () => {
  const [isSelectionDialogShown, setIsSelectionDialogShown] = useState<boolean>(false);

  return (
    <>
      <AppBar title={locales.t('more.categories.title')} shadowVisible={false} />
      <Tab />
      <View absR absB marginB-22 marginR-22>
        <FloatingButton onPress={() => setIsSelectionDialogShown(true)} />
      </View>
      <DialogCategoryTypeSelection
        isVisible={isSelectionDialogShown}
        onDismiss={() => setIsSelectionDialogShown(false)}
      />
    </>
  );
};

export default CategoriesLayout;
