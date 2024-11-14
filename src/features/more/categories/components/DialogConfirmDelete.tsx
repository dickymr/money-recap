import { router } from 'expo-router';
import { View, Text, Colors, Button, Dialog, Constants } from 'react-native-ui-lib';

import locales from '@/locales';

type DialogConfirmDeleteProps = {
  hasSubcategories: boolean;
  isVisible: boolean;
  onDismiss: () => void;
};

const DialogConfirmDelete = (props: DialogConfirmDeleteProps) => {
  const handleClickDelete = (action: 'cancel' | 'delete') => {
    if (action === 'cancel') {
      onDismiss();
    }

    if (action === 'delete') {
      router.back();
    }
  };

  const { hasSubcategories, isVisible, onDismiss } = props;

  return (
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
      visible={isVisible}
      onDismiss={onDismiss}
    >
      <View flex-1 paddingH-25 paddingV-5>
        <View left marginT-17 marginB-10>
          <Text text70BO $textDefault>
            {locales.t('more.categories.detail.modalDeleteTitle')}
          </Text>
        </View>
        <View marginB-10>
          <Text text80 $textNeutral>
            {locales.t(
              `more.categories.detail.modalDeleteDescription${
                hasSubcategories ? 'HaveChildren' : ''
              }`
            )}
          </Text>
        </View>
        <View row absB absR marginB-17 marginR-15>
          <Button
            backgroundColor="transparent"
            size={Button.sizes.xSmall}
            onPress={() => handleClickDelete('cancel')}
          >
            <Text text70R uppercase $textDefault>
              {locales.t('more.categories.detail.modalDeleteNo')}
            </Text>
          </Button>
          <Button
            backgroundColor="transparent"
            size={Button.sizes.xSmall}
            onPress={() => handleClickDelete('delete')}
          >
            <Text text70BL uppercase $textDanger>
              {locales.t('more.categories.detail.modalDeleteYes')}
            </Text>
          </Button>
        </View>
      </View>
    </Dialog>
  );
};

export default DialogConfirmDelete;
