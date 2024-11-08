import React from 'react';
import { Colors, Text, View } from 'react-native-ui-lib';
import { Tabs } from 'expo-router';

import locales from '@/locales';

import { Icon } from '@/components';
import { NavItem } from '@/constants/types';

const navItems: NavItem[] = [
  {
    name: 'index',
    title: 'nav.home',
    icon: 'House',
  },
  {
    name: 'transaction',
    title: 'nav.transaction',
    icon: 'ArrowRightLeft',
  },
  {
    name: 'budget',
    title: 'nav.budget',
    icon: 'ChartPie',
  },
  {
    name: 'more',
    title: 'nav.more',
    icon: 'Ellipsis',
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: { height: 70 },
      }}
    >
      {navItems.map((item) => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          options={{
            title: locales.t(item.title),
            tabBarIcon: ({ focused }) => (
              <View marginT-5>
                <Icon
                  name={item.icon}
                  color={focused ? Colors.$textPrimary : Colors.$textNeutral}
                  size={24}
                />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{ color: focused ? Colors.$textPrimary : Colors.$textNeutral }}
                text80BL
                marginB-7
              >
                {locales.t(item.title)}
              </Text>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
