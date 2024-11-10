import { useState } from 'react';
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
  Picker,
  Incubator,
} from 'react-native-ui-lib';
import { icons } from 'lucide-react-native';

import locales from '@/locales';

import { AppBar, Icon, IconPicker } from '@/components';

import { listExpense, listIncome } from '@/constants/dummies';

interface FormData {
  name: string;
  backgroundColor: string;
  icon: keyof typeof icons;
  type: 'expense' | 'income';
  parent: string;
}

interface Type {
  label: string;
  value: string;
}

const types: Type[] = [
  { label: locales.t('more.categories.add.expense'), value: 'expense' },
  { label: locales.t('more.categories.add.income'), value: 'income' },
];

export default function CategoryAddScreen() {
  const handleClickParent = (category: string) => {
    handleChangeFormData('parent', category);
  };

  const handleClickType = (type: 'expense' | 'income') => {
    handleChangeFormData('parent', '-');
    handleChangeFormData('type', type);
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formData));
  };

  const handleChangeFormData = (key: string, value: string | number | boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const param = useLocalSearchParams();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    backgroundColor: Colors.red30,
    icon: 'Banknote',
    type: param.type === 'expense' || param.type === 'income' ? param.type : 'expense',
    parent: '-',
  });

  const list = formData.type === 'expense' ? listExpense : listIncome;

  const parentCategories = list.map((item) => ({
    label: item.name,
    value: item.name,
  }));

  return (
    <>
      <AppBar
        title={locales.t('more.categories.add.title')}
        sectionRight={() => (
          <Button
            backgroundColor={Colors.$backgroundPrimaryMedium}
            size={Button.sizes.xSmall}
            onPress={handleSubmit}
          >
            <Text color={Colors.$textNeutral} text80H>
              {locales.t('more.categories.add.save')}
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
            placeholder={String(locales.t('more.categories.add.placeholderName'))}
            placeholderTextColor={Colors.$textNeutralLight}
            onChangeText={(value) => handleChangeFormData('name', value)}
            value={formData.name}
          />
        </View>
      </View>

      {/* TYPE */}
      <View marginB-10>
        <Picker
          items={types}
          topBarProps={{ title: locales.t('helper.categoryTypePicker.title') }}
          value={formData.type}
          onChange={(item) => handleClickType(item as 'expense' | 'income')}
          enableModalBlur={false}
          renderInput={() => (
            <ListItem height={55} activeOpacity={0.5}>
              <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
                <View width={30} height={30} center marginR-15>
                  <Icon name="Puzzle" color={Colors.$textNeutralLight} size={20} />
                </View>
                <View flex-1>
                  <TextField
                    style={{ ...Typography.text70, textTransform: 'capitalize' }}
                    containerStyle={{ flex: 1 }}
                    floatingPlaceholder
                    floatOnFocus={true}
                    placeholder={String(locales.t('more.categories.add.placeholderType'))}
                    placeholderTextColor={Colors.$textNeutralLight}
                    floatingPlaceholderStyle={{ ...Typography.text90R }}
                    value={formData.type}
                  />
                </View>
              </View>
            </ListItem>
          )}
        />
      </View>

      {/* PARENT CATEGORY */}
      <View marginB-10>
        <Picker
          items={parentCategories}
          topBarProps={{ title: locales.t('helper.parentCategoryPicker.title') }}
          value={formData.parent}
          onChange={(item) => handleClickParent(item as string)}
          enableModalBlur={false}
          renderInput={() => (
            <ListItem height={55} activeOpacity={0.5}>
              <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
                <View width={30} height={30} center marginR-15>
                  <Icon name="Network" color={Colors.$textNeutralLight} size={20} />
                </View>
                <View flex-1>
                  <TextField
                    style={{ ...Typography.text70, textTransform: 'capitalize' }}
                    containerStyle={{ flex: 1 }}
                    floatingPlaceholder
                    floatOnFocus={true}
                    placeholder={String(locales.t('more.categories.add.placeholderParent'))}
                    placeholderTextColor={Colors.$textNeutralLight}
                    floatingPlaceholderStyle={{ ...Typography.text90R }}
                    value={formData.parent}
                  />
                </View>
              </View>
            </ListItem>
          )}
        />
        <Button
          style={{
            opacity: formData.parent === '-' ? 0 : 1,
            pointerEvents: formData.parent === '-' ? 'none' : 'auto',
            position: 'absolute',
            top: 15,
            right: 25,
          }}
          size={Button.sizes.small}
          backgroundColor={Colors.$backgroundNeutralMedium}
          round
          onPress={() => setFormData((prev) => ({ ...prev, parent: '-' }))}
        >
          <Icon name="X" color={Colors.$textDefault} size={12} />
        </Button>
      </View>
    </>
  );
}
