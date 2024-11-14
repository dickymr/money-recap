import { Text, View, Colors, Constants, Dialog, ListItem } from 'react-native-ui-lib';
import { router } from 'expo-router';

import locales from '@/locales';

import { Icon } from '@/components';

import { categoryTypes } from '../constants';

type DialogWalletTypeSelectionProps = {
  isVisible: boolean;
  onDismiss: () => void;
};

const DialogCategoryTypeSelection = (props: DialogWalletTypeSelectionProps) => {
  const handleClickDialogItem = (type: 'expense' | 'income') => {
    onDismiss();
    router.push({ pathname: '/categories/[id]', params: { id: type } });
  };

  const { isVisible, onDismiss } = props;

  return (
    <Dialog
      useSafeArea
      bottom={true}
      height="25%"
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
      <View flex-1>
        <View left marginT-17 marginB-5 paddingL-25>
          <Text text80M $textNeutral>
            {locales.t('more.categories.choiceTitle')}
          </Text>
        </View>
        <View flex paddingH-10 marginB-10>
          {categoryTypes.map((category) => (
            <ListItem
              key={category.key}
              flex-2
              centerV
              activeOpacity={0.5}
              onPress={() => handleClickDialogItem(category.key)}
            >
              <View height="100%" flex row centerV bg-$backgroundElevated paddingH-10>
                <View width={60} height={60} center br100 marginR-10>
                  <Icon name={category.icon} color={Colors.$iconNeutral} size={35} />
                </View>
                <View>
                  <Text text70M $textDefault>
                    {category.label}
                  </Text>
                  <Text text80 $textNeutral>
                    {category.desc}
                  </Text>
                </View>
              </View>
            </ListItem>
          ))}
        </View>
      </View>
    </Dialog>
  );
};

export default DialogCategoryTypeSelection;
