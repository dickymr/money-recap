import {
  View,
  Colors,
  Typography,
  ListItem,
  Dividers,
  Text,
  Button,
} from 'react-native-ui-lib';

import locales from '@/locales';

import { Icon } from '@/components';

const ToolCardList = () => {
  return (
    <>
      {/* Export CSV */}
      <View>
        <ListItem height={60} activeOpacity={0.5}>
          <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
            <View width={30} height={30} center marginR-15>
              <Icon name="ArrowUpToLine" color={Colors.$textNeutral} size={20} />
            </View>
            <View flex-1 centerV>
              <Text style={{ ...Typography.text70R }}>
                {locales.t('more.tools.exportCsv')}
              </Text>
            </View>
          </View>
        </ListItem>
      </View>

      {/* Import CSV */}
      <View>
        <ListItem height={60} activeOpacity={0.5}>
          <View style={[Dividers.d10]} flex row centerV bg-$backgroundElevated paddingH-25>
            <View width={30} height={30} center marginR-15>
              <Icon name="ArrowDownFromLine" color={Colors.$textNeutral} size={20} />
            </View>
            <View flex-1 centerV>
              <Text style={{ ...Typography.text70R }}>
                {locales.t('more.tools.importCsv')}
              </Text>
            </View>
            <Button
              backgroundColor={Colors.$backgroundPrimary}
              size={Button.sizes.xSmall}
              paddingV-7
              paddingH-12
            >
              <Icon name="Download" color={Colors.$textDefaultLight} size={15} />
              <Text text90BO $textDefaultLight marginL-5>
                Template
              </Text>
            </Button>
          </View>
        </ListItem>
      </View>
    </>
  );
};

export default ToolCardList;
