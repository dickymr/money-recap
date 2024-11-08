import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, Colors, ColorSwatch, View } from 'react-native-ui-lib';
import { icons } from 'lucide-react-native';

import { Icon } from '@/components';

const colorList: Array<string> = [
  Colors.red30,
  Colors.blue30,
  Colors.green30,
  Colors.grey30,
  Colors.yellow30,
  Colors.purple30,
  Colors.orange30,
  Colors.cyan30,
  Colors.violet30,
];

type ColorName = (typeof colorList)[number];

const iconList: Array<keyof typeof icons> = [
  'Wallet',
  'IdCard',
  'CreditCard',
  'PiggyBank',
  'Car',
  'Currency',
  'Medal',
  'Sailboat',
  'Kanban',
  'Rabbit',
  'Package',
  'Gift',
  'AArrowDown',
  'Facebook',
  'Mail',
  'Network',
  'Cable',
  'Baby',
  'BookX',
  'Zap',
  'FileArchive',
  'QrCode',
  'Subscript',
  'AlignHorizontalDistributeEnd',
  'Radar',
  'FolderHeart',
  'Airplay',
  'Anchor',
  'Aperture',
  'Archive',
  'Award',
  'Battery',
  'Bell',
  'Bluetooth',
  'Bold',
  'Book',
  'Bookmark',
  'Box',
  'Briefcase',
  'Calendar',
  'Camera',
  'Cast',
  'Clipboard',
];

type IconName = (typeof iconList)[number];

interface IconPreviewProps {
  selectedColor: string;
  selectedIcon: IconName;
}

const IconPreview = ({ selectedColor, selectedIcon }: IconPreviewProps) => {
  return (
    <View width={90} height={90} style={{ backgroundColor: selectedColor }} center br100>
      <Icon name={selectedIcon} color={Colors.$textDefault} size={45} />
    </View>
  );
};

interface ColorSelectorProps {
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const ColorSelector = ({ selectedColor, onSelectColor }: ColorSelectorProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {colorList.map((color) => (
        <ColorSwatch
          key={color}
          style={{ marginRight: 5 }}
          color={color}
          size={60}
          selected={selectedColor === color}
          onPress={() => onSelectColor(color)}
        />
      ))}
    </ScrollView>
  );
};

interface IconSelectorProps {
  selectedIcon: IconName;
  onSelectIcon: (icon: IconName) => void;
}

const IconSelector = ({ selectedIcon, onSelectIcon }: IconSelectorProps) => {
  return (
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
            <Button backgroundColor="transparent" onPress={() => onSelectIcon(icon)}>
              <Icon
                name={icon}
                color={selectedIcon === icon ? Colors.$textDefault : Colors.$textNeutralLight}
                size={30}
              />
            </Button>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

interface IconPickerProps {
  onColorChanged: (color: string) => void;
  onIconChanged: (icon: IconName) => void;
  currentColor: ColorName;
  currentIcon: IconName;
}

const IconPicker = ({
  currentColor,
  currentIcon,
  onColorChanged,
  onIconChanged,
}: IconPickerProps) => {
  const [selectedColor, setSelectedColor] = useState<ColorName>(currentColor || colorList[0]);
  const [selectedIcon, setSelectedIcon] = useState<IconName>(currentIcon || iconList[0]);

  useEffect(() => {
    onColorChanged(selectedColor);
  }, [selectedColor]);

  useEffect(() => {
    onIconChanged(selectedIcon);
  }, [selectedIcon]);

  return (
    <View flex-1>
      <View center marginV-20>
        <IconPreview selectedColor={selectedColor} selectedIcon={selectedIcon} />
      </View>
      <View height={85} paddingH-10 marginB-10>
        <ColorSelector selectedColor={selectedColor} onSelectColor={setSelectedColor} />
      </View>
      <View flex>
        <IconSelector selectedIcon={selectedIcon} onSelectIcon={setSelectedIcon} />
      </View>
    </View>
  );
};

export default IconPicker;
