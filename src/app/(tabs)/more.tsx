import { View, Text, ListItem, Colors, Dividers } from 'react-native-ui-lib';
import { FlashList } from '@shopify/flash-list';

import locales from '@/locales';

import { AppBar, Icon } from '@/components';
import { ActionRow } from '@/constants/types';
import { router } from 'expo-router';

const actions: ActionRow[] = [
  {
    row: 1,
    items: [
      {
        text: 'more.list.account',
        icon: 'User',
        path: '/account',
      },
    ],
  },
  {
    row: 2,
    items: [
      {
        text: 'more.list.wallets',
        icon: 'Wallet',
        path: '/wallets',
      },
      {
        text: 'more.list.categories',
        icon: 'Tag',
        path: '/categories',
      },
    ],
  },
  {
    row: 3,
    items: [
      {
        text: 'more.list.debts',
        icon: 'ArrowUpDown',
        path: '/debts',
      },
    ],
  },
  {
    row: 4,
    items: [
      {
        text: 'more.list.tools',
        icon: 'Sheet',
        path: '/tools',
      },
      {
        text: 'more.list.settings',
        icon: 'Settings',
        path: '/settings',
      },
    ],
  },
  {
    row: 5,
    items: [
      {
        text: 'more.list.feedback',
        icon: 'MessageSquareShare',
        path: '/feedback',
      },
      {
        text: 'more.list.about',
        icon: 'CircleAlert',
        path: '/about',
      },
    ],
  },
];

export default function MoreScreen() {
  const handlePressItem = (path: string) => {
    router.push(path as any);
  };

  const renderItem = ({ row, items }: ActionRow) => {
    return (
      <View key={row} marginB-15>
        {items.map(({ text, icon, path }, idx) => (
          <ListItem
            key={idx}
            height={70}
            activeOpacity={0.5}
            onPress={() => handlePressItem(path)}
            bg-$backgroundElevated
          >
            <View style={[Dividers.d10]} flex row centerV paddingH-20>
              <Icon name={icon} color={Colors.$iconNeutral} />
              <Text text70 $textDefault marginL-20>
                {locales.t(text)}
              </Text>
              <View flex right>
                <Icon name="ArrowRight" color={Colors.$iconNeutral} size={18} />
              </View>
            </View>
          </ListItem>
        ))}
      </View>
    );
  };

  return (
    <>
      <AppBar title={locales.t('more.title')} />
      <View flex-1>
        <FlashList
          data={actions}
          renderItem={({ item }) => renderItem(item)}
          estimatedItemSize={5}
        />
      </View>
    </>
  );
}
