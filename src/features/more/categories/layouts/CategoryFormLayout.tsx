import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Text, Colors, Button, View } from 'react-native-ui-lib';

import locales from '@/locales';

import { AppBar, Icon } from '@/components';

import { backgroundIconList } from '@/constants';

import CategoryForm from '../components/CategoryForm';
import DialogConfirmDelete from '../components/DialogConfirmDelete';

import { categories } from '../mocks';

import { CategoryFormType } from '../types';

export default function CategoryFormLayout() {
  const handleClickSave = () => {
    alert(JSON.stringify(form));
  };

  const determineMode = () => {
    if (id === 'expense' || id === 'income') return 'add';
    return 'edit';
  };

  const { id } = useLocalSearchParams();

  const [isDeleteDialogShown, setIsDeleteDialogShown] = useState<boolean>(false);
  const [form, setForm] = useState<CategoryFormType>({
    name: '',
    backgroundIcon: backgroundIconList[0],
    icon: 'Banknote',
    type: id === 'expense' || id === 'income' ? id : 'expense',
    parent: '-',
  });

  const mode = determineMode();

  const category = categories
    .flatMap((category) => [category, ...category.children])
    .find((cat) => cat.id === Number(id));

  useEffect(() => {
    const parentCategory = categories.find((category) =>
      category.children.some((child) => child.id === Number(id))
    );

    const parent = parentCategory ? parentCategory.name : '-';

    if (!category) return;

    setForm({
      ...form,
      name: category?.name,
      backgroundIcon: category?.color,
      icon: category?.icon,
      type: category?.type,
      parent: parent,
    });
  }, []);

  return (
    <>
      <AppBar
        title={
          mode === 'add'
            ? locales.t('more.categories.detail.titleAdd')
            : locales.t('more.categories.detail.titleEdit')
        }
        sectionRight={() => (
          <View row>
            <Button
              backgroundColor={Colors.$backgroundPrimary}
              size={Button.sizes.xSmall}
              onPress={handleClickSave}
              paddingV-7
              paddingH-12
            >
              <Icon name="Save" color={Colors.$textDefaultLight} size={15} />
              <Text text90BO uppercase $textDefaultLight marginL-5>
                {locales.t('more.categories.detail.save')}
              </Text>
            </Button>
          </View>
        )}
      />

      {/* FORM */}
      <CategoryForm mode={mode} form={form} setForm={setForm} />

      {/* DELETE BUTTON */}
      <View style={{ display: mode === 'add' ? 'none' : 'flex' }} height={55} marginB-10>
        <View flex row center>
          <Button
            backgroundColor="transparent"
            size={Button.sizes.xSmall}
            onPress={() => setIsDeleteDialogShown(true)}
          >
            <Icon name="Trash2" color={Colors.$iconDanger} size={17.5} />
            <Text text80BO uppercase $textDanger marginL-5>
              {locales.t('more.categories.detail.delete')}
            </Text>
          </Button>
        </View>
      </View>

      {/* CONFIRM DELETE */}
      <DialogConfirmDelete
        hasSubcategories={(category?.children?.length ?? 0) > 0}
        isVisible={isDeleteDialogShown}
        onDismiss={() => setIsDeleteDialogShown(false)}
      />
    </>
  );
}
