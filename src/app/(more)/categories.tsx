import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import {
  Colors,
  Constants,
  Dialog,
  Dividers,
  ListItem,
  Shadows,
  Text,
  TouchableOpacity,
  View,
} from 'react-native-ui-lib';
import { router } from 'expo-router';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FlashList } from '@shopify/flash-list';

import locales from '@/locales';

import { AppBar, Icon } from '@/components';

import { Category, CategoryType } from '@/constants/types';

import { listExpense, listIncome } from '@/constants/dummies';

const categoryTypes: CategoryType[] = [
  {
    key: 'expense',
    icon: 'CircleArrowUp',
    label: locales.t('more.categories.choiceExpense'),
    desc: locales.t('more.categories.choiceExpenseDesc'),
  },
  {
    key: 'income',
    icon: 'CircleArrowDown',
    label: locales.t('more.categories.choiceIncome'),
    desc: locales.t('more.categories.choiceIncomeDesc'),
  },
];

const List = ({ type, data }: { type: 'expense' | 'income'; data: Category[] }) => (
  <FlashList
    data={data}
    renderItem={({ item }) => (
      <View key={type} marginB-15>
        <ListItem height={70} activeOpacity={0.5}>
          <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-20>
            <View width={40} height={40} center backgroundColor={item.color} br100 marginR-15>
              <Icon name={item.icon} color={Colors.$textDefault} size={22.5} />
            </View>
            <View>
              <Text text80BO $textDefault>
                {item.name}
              </Text>
            </View>
          </View>
        </ListItem>
        {item.children.map(({ name, icon, color }, idx) => (
          <ListItem key={idx} height={70} activeOpacity={0.5}>
            <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingL-25>
              <View width={30} height={30} center backgroundColor={color} br100 marginR-20>
                <Icon name={icon} color={Colors.$textDefault} size={17.5} />
              </View>
              <View>
                <Text text80 $textDefault>
                  {name}
                </Text>
              </View>
            </View>
          </ListItem>
        ))}
      </View>
    )}
    estimatedItemSize={5}
  />
);

const ExpenseRoute = () => <List type="expense" data={listExpense} />;

const IncomeRoute = () => <List type="income" data={listIncome} />;

const CategoriesScreen = () => {
  const handleClickDialogItem = (type: 'expense' | 'income') => {
    setShowDialog(false);
    router.push({ pathname: '/categories-add', params: { type } });
  };

  const layout = useWindowDimensions();

  const [tabIndex, setTabIndex] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <AppBar title={locales.t('more.categories.title')} shadowVisible={false} />
      <TabView
        initialLayout={{ width: layout.width }}
        navigationState={{
          index: tabIndex,
          routes: [
            { key: 'expense', title: locales.t('more.categories.tab.expense') },
            { key: 'income', title: locales.t('more.categories.tab.income') },
          ],
        }}
        renderScene={SceneMap({ expense: ExpenseRoute, income: IncomeRoute })}
        onIndexChange={setTabIndex}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{ backgroundColor: Colors.$backgroundElevated }}
            activeColor={Colors.$textDefault}
            inactiveColor={Colors.$textNeutralLight}
            indicatorStyle={{ backgroundColor: Colors.$textPrimary }}
            pressColor={Colors.$backgroundNeutralMedium}
          />
        )}
      />
      <View absR absB marginB-22 marginR-22>
        <TouchableOpacity
          br50
          padding-15
          backgroundColor={Colors.$backgroundPrimaryMedium}
          activeOpacity={0.5}
          onPress={() => setShowDialog(true)}
          style={[Shadows.sh30.bottom]}
        >
          <Icon name="Plus" color={Colors.$textPrimary} size={25} />
        </TouchableOpacity>
      </View>
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
        visible={showDialog}
        onDismiss={() => setShowDialog(false)}
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
    </>
  );
};

export default CategoriesScreen;
