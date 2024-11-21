import { Colors, Dividers, ListItem, Text, View } from 'react-native-ui-lib';

import { Icon } from '@/components';

import { formatCurrency } from '@/utils';

import { WalletItemType } from '../types';

type WalletItemProps = {
  data: WalletItemType;
  onPress: (id: number) => void;
};

const WalletItem = ({ data, onPress }: WalletItemProps) => {
  const { id, name, balance, icon, color } = data;

  return (
    <ListItem key={id} height={70} activeOpacity={0.5} onPress={() => onPress(id)}>
      <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-20>
        <View width={40} height={40} center backgroundColor={color} br100 marginR-15>
          <Icon
            name={icon}
            color={Colors.isDark(color) ? Colors.$textDefaultLight : Colors.$textDefault}
            size={22.5}
          />
        </View>
        <View>
          <Text text80 $textDefault>
            {name}
          </Text>
          <Text text80BO $textDefault>
            {formatCurrency(balance)}
          </Text>
        </View>
      </View>
    </ListItem>
  );
};

export default WalletItem;
