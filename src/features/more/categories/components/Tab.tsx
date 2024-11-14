import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import locales from '@/locales';

import CategoryCardList from './CategoryCardList';

import { categories } from '../mocks';

const listExpense = categories.filter((category) => category.type === 'expense');
const listIncome = categories.filter((category) => category.type === 'income');

const ExpenseRoute = () => <CategoryCardList data={listExpense} />;
const IncomeRoute = () => <CategoryCardList data={listIncome} />;

const routes = [
  { key: 'expense', title: locales.t('more.categories.tab.expense') },
  { key: 'income', title: locales.t('more.categories.tab.income') },
];

const Tab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const layout = useWindowDimensions();

  return (
    <TabView
      initialLayout={{ width: layout.width }}
      navigationState={{ index: tabIndex, routes: routes }}
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
  );
};

export default Tab;
