import { useState } from 'react';
import { View, Text, Colors, TouchableOpacity } from 'react-native-ui-lib';

import locales from '@/locales';

import { AppBar, Icon } from '@/components';

import Tab from '../components/Tab';
import FilterChips from '../components/FilterChips';

const TransactionsLayout = () => {
  const toggleFilterSection = () => {
    setFilterSectionShown(!filterSectionShown);
  };

  const [filterSectionShown, setFilterSectionShown] = useState<boolean>(false);

  return (
    <>
      <AppBar
        title={() => (
          <View center>
            <Text $textNeutral>{locales.t('general.balance')}</Text>
            <Text text70BO>Rp. 10.350.000</Text>
          </View>
        )}
        align="center"
        sectionRight={() => (
          <View row paddingR-10>
            <TouchableOpacity marginR-10 onPress={toggleFilterSection}>
              <Icon name="Filter" color={Colors.$textNeutral} size={22.5} />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleFilterSection}>
              <Icon name="Search" color={Colors.$textNeutral} size={22.5} />
            </TouchableOpacity>
          </View>
        )}
      />
      <View flex>
        <Tab filterSectionShown={filterSectionShown} />
        <FilterChips filterSectionShown={filterSectionShown} />
      </View>
    </>
  );
};

export default TransactionsLayout;
