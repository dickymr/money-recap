import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, Colors, ColorSwatch, View } from 'react-native-ui-lib';

import { Icon } from '@/components';

import { backgroundIconList, iconList } from '@/constants';

type ColorName = (typeof backgroundIconList)[number];

type IconName = (typeof iconList)[number];

type IconPickerProps = {
  currentColor: ColorName;
  currentIcon: IconName;
  onColorChanged: (color: string) => void;
  onIconChanged: (icon: IconName) => void;
};

const IconPicker = ({
  currentColor,
  currentIcon,
  onColorChanged,
  onIconChanged,
}: IconPickerProps) => {
  const handleColorChange = (color: ColorName) => {
    setSelectedColor(color);
  };

  const handleIconChange = (icon: IconName) => {
    setSelectedIcon(icon);
  };

  const [selectedIcon, setSelectedIcon] = useState<IconName>(currentIcon || iconList[0]);
  const [selectedColor, setSelectedColor] = useState<ColorName>(
    currentColor || backgroundIconList[0]
  );

  useEffect(() => {
    onColorChanged(selectedColor);
  }, [selectedColor]);

  useEffect(() => {
    onIconChanged(selectedIcon);
  }, [selectedIcon]);

  return (
    <View flex-1>
      <View center marginV-20>
        <View width={90} height={90} style={{ backgroundColor: selectedColor }} center br100>
          <Icon
            name={selectedIcon}
            color={
              Colors.isDark(selectedColor) ? Colors.$textDefaultLight : Colors.$textDefault
            }
            size={45}
          />
        </View>
      </View>
      <View height={85} paddingH-10>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {backgroundIconList.map((color) => (
            <ColorSwatch
              key={color}
              style={{ marginRight: 5 }}
              color={color}
              size={60}
              selected={selectedColor === color}
              onPress={() => handleColorChange(color)}
            />
          ))}
        </ScrollView>
      </View>
      <View flex>
        <ScrollView>
          <View style={{ flexWrap: 'wrap' }} flex row center paddingB-20>
            {iconList.map((icon) => (
              <View
                key={icon}
                style={{ width: 60, height: 60 }}
                center
                backgroundColor={
                  selectedIcon === icon
                    ? Colors.$backgroundNeutralMedium
                    : Colors.$backgroundNeutralLight
                }
                br100
                marginH-10
                marginV-10
              >
                <Button backgroundColor="transparent" onPress={() => handleIconChange(icon)}>
                  <Icon
                    name={icon}
                    color={
                      selectedIcon === icon ? Colors.$textDefault : Colors.$textNeutralLight
                    }
                    size={30}
                  />
                </Button>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default IconPicker;
