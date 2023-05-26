/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image } from 'react-native';

const TabBarIcon = ({
  size,
  focused,
  icon,
}: {
  size: number;
  focused: boolean;
  icon;
}) => {
  return (
    <Image
      style={{
        width: size,
        height: size,
        tintColor: focused ? '#ec537e' : 'black',
      }}
      resizeMode={'contain'}
      source={icon}
    />
  );
};

export default TabBarIcon;
