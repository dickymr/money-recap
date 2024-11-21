import { Colors, Dividers, ListItem, Text, View } from 'react-native-ui-lib';
import { format } from 'date-fns';

import { Icon } from '@/components';

import { formatCurrency } from '@/utils';

import { TransactionType } from '../types';

type TransactionCardProps = {
  transaction: TransactionType;
};

const TransactionCard = ({ transaction }: TransactionCardProps) => {
  return (
    <View marginB-10>
      <View>
        <View
          style={[Dividers.d10]}
          flex
          row
          centerV
          bg-$backgroundElevated
          paddingV-5
          paddingH-20
        >
          <View width={40} height={40} center marginR-10>
            <Text text40R $textDefault>
              {format(transaction.date, 'dd')}
            </Text>
          </View>
          <View flex>
            <Text text80 $textDefault>
              {format(transaction.date, 'EEEE')}
            </Text>
            <Text text90R $textNeutral>
              {format(transaction.date, 'MMMM yyyy')}
            </Text>
          </View>
          <View>
            <Text
              text70M
              color={transaction.total > 0 ? Colors.$textPrimary : Colors.$textDanger}
            >
              {formatCurrency(transaction.total)}
            </Text>
          </View>
        </View>
        {transaction.items.map((item, idx) => (
          <ListItem
            key={idx}
            activeOpacity={0.5}
            // onPress={() => console.log('Item pressed', id)}
          >
            <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-20>
              <View
                width={40}
                height={40}
                center
                backgroundColor={item.color}
                br100
                marginR-15
              >
                <Icon
                  name={item.icon}
                  color={
                    Colors.isDark(item.color) ? Colors.$textDefaultLight : Colors.$textDefault
                  }
                  size={22.5}
                />
              </View>
              <View flex>
                <Text text80 $textDefault>
                  {item.category}
                </Text>
                <Text text90R $textDefault>
                  {item.wallet}
                </Text>
                {item.desc && (
                  <Text text90R $textNeutral>
                    {item.desc}
                  </Text>
                )}
              </View>
              <View style={{ display: 'flex', alignItems: 'flex-end' }} marginB-2>
                <Text
                  text70
                  color={transaction.total > 0 ? Colors.$textPrimary : Colors.$textDanger}
                  marginB-2
                >
                  {formatCurrency(item.amount)}
                </Text>
                <View row>
                  {item.budgets.map((budget, i) => (
                    <View
                      key={i}
                      marginL-5={i > 0 ? true : false}
                      style={{
                        backgroundColor: Colors.rgba(Colors.$textPrimary, 0.15),
                        borderRadius: 5,
                      }}
                      paddingH-5
                    >
                      <Text style={{ lineHeight: 12.5 }} text100R $textNeutral>
                        {budget}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </ListItem>
        ))}
      </View>
    </View>
  );
};

export default TransactionCard;
