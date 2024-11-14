import React from 'react';
import { Colors, TouchableOpacity, Shadows } from 'react-native-ui-lib';

import { Icon } from '@/components';

type FloatingButtonProps = {
  onPress: () => void;
};

const FloatingButton = ({ onPress }: FloatingButtonProps) => {
  return (
    <TouchableOpacity
      br50
      padding-15
      backgroundColor={Colors.$backgroundPrimaryMedium}
      activeOpacity={0.5}
      onPress={onPress}
      style={[Shadows.sh30.bottom]}
    >
      <Icon name="Plus" color={Colors.$textPrimary} size={25} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
