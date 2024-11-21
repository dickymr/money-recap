import { Chip, Colors, Spacings, View } from 'react-native-ui-lib';

type FilterChipsProps = {
  filterSectionShown: boolean;
};

const FilterChips = ({ filterSectionShown }: FilterChipsProps) => {
  return (
    <View
      style={{
        display: filterSectionShown ? 'flex' : 'none',
        position: 'absolute',
        top: 50,
        width: '100%',
        height: Spacings.s10 * 1.3,
      }}
      flex
      bg-$backgroundElevated
      row
      center
      absT-0
    >
      <View row marginR-10>
        <Chip
          label="SeaBank"
          onPress={() => console.log('pressed')}
          backgroundColor={Colors.$backgroundNeutralMedium}
        />
      </View>
      <View row marginR-10>
        <Chip
          label="Restaurant"
          onPress={() => console.log('pressed')}
          backgroundColor={Colors.$backgroundNeutralMedium}
        />
      </View>
    </View>
  );
};

export default FilterChips;
