import { Colors, Dividers, ListItem, Text, View } from 'react-native-ui-lib';
import { router } from 'expo-router';

import { Icon } from '@/components';

import { CategoryType } from '../types';

type CategoryCardProps = CategoryType & {
  children: CategoryType[];
};

const CategoryCard = ({ id, name, color, icon, children }: CategoryCardProps) => {
  const handlePressItem = (id: number) => {
    router.push({ pathname: '/categories/[id]', params: { id } });
  };

  return (
    <View marginB-15>
      <ListItem height={70} activeOpacity={0.5} onPress={() => handlePressItem(id)}>
        <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-20>
          <View width={40} height={40} center backgroundColor={color} br100 marginR-15>
            <Icon
              name={icon}
              color={Colors.isDark(color) ? Colors.$textDefaultLight : Colors.$textDefault}
              size={22.5}
            />
          </View>
          <View>
            <Text text80BO $textDefault>
              {name}
            </Text>
          </View>
        </View>
      </ListItem>
      {children.map(({ id, name, icon, color }, idx) => (
        <ListItem
          key={idx}
          height={70}
          activeOpacity={0.5}
          onPress={() => handlePressItem(id)}
        >
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
  );
};

export default CategoryCard;
