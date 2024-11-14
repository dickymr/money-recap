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

import locales from '@/locales';

import { Icon, IconPicker } from '@/components';

import { categoryTypesPicker } from '../constants';

import { categories } from '../mocks';

import { CategoryFormType } from '../types';

type WalletFormProps = {
  mode: 'add' | 'edit';
  form: CategoryFormType;
  setForm: React.Dispatch<React.SetStateAction<CategoryFormType>>;
};

const CategoryForm = ({ mode, form, setForm }: WalletFormProps) => {
  const handleClickType = (type: string) => {
    updateForm('parent', '-');
    updateForm('type', type);
  };

  const handleClickParent = (category: string) => {
    updateForm('parent', category);
  };

  const updateForm = (key: string, value: string | number | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const parentCategories = categories
    .filter((category) => category.type === form.type)
    .map((item) => ({
      value: item.name,
      label: item.name,
      icon: item.icon,
      color: item.color,
    }));

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
            placeholder={String(locales.t('more.categories.detail.placeholderName'))}
            placeholderTextColor={Colors.$textNeutralLight}
            onChangeText={(value) => updateForm('name', value)}
            value={form.name}
          />
        </View>
      </View>

      {/* TYPE */}
      <View marginB-10>
        <Picker
          items={categoryTypesPicker}
          topBarProps={{
            title: locales.t('helper.categoryTypePicker.title'),
            cancelButtonProps: {
              iconStyle: { tintColor: Colors.$textDefault, marginLeft: 5 },
            },
          }}
          value={form.type}
          onChange={(item) => handleClickType(item as 'expense' | 'income')}
          enableModalBlur={false}
          renderInput={() => (
            <ListItem height={55} activeOpacity={0.5}>
              <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
                <View width={30} height={30} center marginR-15>
                  <Icon name="Puzzle" color={Colors.$textNeutral} size={20} />
                </View>
                <View flex-1>
                  <TextField
                    style={{ ...Typography.text70, textTransform: 'capitalize' }}
                    containerStyle={{ flex: 1 }}
                    floatingPlaceholder
                    floatOnFocus={true}
                    placeholder={String(locales.t('more.categories.detail.placeholderType'))}
                    placeholderTextColor={Colors.$textNeutralLight}
                    floatingPlaceholderStyle={{ ...Typography.text90R }}
                    value={form.type}
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
          topBarProps={{
            title: locales.t('helper.parentCategoryPicker.title'),
            cancelButtonProps: {
              iconStyle: { tintColor: Colors.$textDefault, marginLeft: 5 },
            },
          }}
          value={form.parent}
          onChange={(item) => handleClickParent(item as string)}
          enableModalBlur={false}
          renderItem={(value) => {
            const category = parentCategories.find((item) => item.value === value);
            return (
              <View style={[Dividers.d10]} row height={65} centerV paddingH-30>
                <View row flex-1>
                  <View
                    width={30}
                    height={30}
                    backgroundColor={category?.color}
                    center
                    br100
                    marginR-15
                  >
                    <Icon
                      name={category?.icon || 'Airplay'}
                      color={
                        Colors.isDark(category?.color)
                          ? Colors.$textDefaultLight
                          : Colors.$textDefault
                      }
                      size={17.5}
                    />
                  </View>
                  <Text text70>{value}</Text>
                </View>
                {form.parent === category?.value && (
                  <Icon name="Check" color={Colors.$textPrimary} size={22.5} />
                )}
              </View>
            );
          }}
          renderInput={() => (
            <ListItem height={55} activeOpacity={0.5}>
              <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
                <View width={30} height={30} center marginR-15>
                  <Icon name="Network" color={Colors.$textNeutral} size={20} />
                </View>
                <View flex-1>
                  <TextField
                    style={{ ...Typography.text70, textTransform: 'capitalize' }}
                    containerStyle={{ flex: 1 }}
                    floatingPlaceholder
                    floatOnFocus={true}
                    placeholder={String(locales.t('more.categories.detail.placeholderParent'))}
                    placeholderTextColor={Colors.$textNeutralLight}
                    floatingPlaceholderStyle={{ ...Typography.text90R }}
                    value={form.parent}
                  />
                </View>
              </View>
            </ListItem>
          )}
        />
        <Button
          style={{
            opacity: form.parent === '-' ? 0 : 1,
            pointerEvents: form.parent === '-' ? 'none' : 'auto',
            position: 'absolute',
            top: 15,
            right: 25,
          }}
          size={Button.sizes.small}
          backgroundColor={Colors.$backgroundNeutralMedium}
          round
          onPress={() => updateForm('parent', '-')}
        >
          <Icon name="X" color={Colors.$textDefault} size={12} />
        </Button>
      </View>
    </>
  );
};

export default CategoryForm;
