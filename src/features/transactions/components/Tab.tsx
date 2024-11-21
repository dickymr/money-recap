import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { Colors, Shadows, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { TabView, TabBar } from 'react-native-tab-view';
import { format } from 'date-fns';

import locales from '@/locales';

import { Icon } from '@/components';

import TransactionCardList from './TransactionCardList';

import { transactionList } from '../mocks';

type TabProps = {
  filterSectionShown: boolean;
};

const Tab = ({ filterSectionShown }: TabProps) => {
  const createRoutes = () => {
    return transactionList
      .map(({ id, periode }) => {
        if (periode === 'future')
          return { key: id, title: locales.t('general.' + periode).toUpperCase() };

        const [startDate, endDate] = periode.split(' - ');

        const start = new Date(startDate);
        const end = new Date(endDate);

        const formatDate = (date: Date) => format(date, 'dd MMM').toUpperCase();
        const formattedPeriode = `${formatDate(start)} - ${formatDate(end)}`;

        return { key: id, title: formattedPeriode };
      })
      .reverse();
  };

  const renderScene = ({ route }: { route: { key: string } }) => {
    const list = transactionList.find((item) => item.id === route.key);

    if (!list) return null;

    if (list.transactions.length === 0) {
      return (
        <View flex center>
          <Text $textDefault text70>
            {locales.t('general.empty')}
          </Text>
        </View>
      );
    }

    return (
      <TransactionCardList
        id={route.key}
        filterSectionShown={filterSectionShown}
        transactions={list.transactions}
        income={list.income}
        expense={list.expense}
        balance={list.balance}
      />
    );
  };

  const routes = createRoutes();

  const layout = useWindowDimensions();

  const currentPeriodeIndex = routes.length - 2;

  const [tabIndex, setTabIndex] = useState(currentPeriodeIndex);

  const isCurrentPeriode = tabIndex === currentPeriodeIndex;
  const isPrev = tabIndex < currentPeriodeIndex;

  return (
    <>
      <TabView
        initialLayout={{ width: layout.width }}
        navigationState={{ index: tabIndex, routes: routes }}
        renderScene={renderScene}
        onIndexChange={setTabIndex}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{ backgroundColor: Colors.$backgroundElevated }}
            activeColor={Colors.$textDefault}
            inactiveColor={Colors.$textNeutralLight}
            indicatorStyle={{ backgroundColor: Colors.$textPrimary }}
            pressColor={Colors.$backgroundNeutralMedium}
            scrollEnabled
          />
        )}
      />
      <View
        style={{ display: isCurrentPeriode ? 'none' : 'flex', zIndex: 1 }}
        absR
        absT
        marginT-30
        marginR-22
      >
        <TouchableOpacity
          br100
          padding-8
          backgroundColor={Colors.$backgroundPrimaryLight}
          activeOpacity={0.5}
          onPress={() => setTabIndex(routes.length - 2)}
          style={[Shadows.sh30.bottom]}
        >
          <Icon
            name={isPrev ? 'ChevronsRight' : 'ChevronsLeft'}
            color={Colors.$textNeutral}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Tab;
