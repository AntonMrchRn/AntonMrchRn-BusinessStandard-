import React from 'react';

import { View, StyleSheet } from 'react-native';

import sizes from '../../helpers/sizes';

interface iSpacer {
  size?: string;
  lineWidth?: string;
  color?: string;
  filler?: boolean;
  style?: any;
}

const Spacer = ({
  size = 'M',
  lineWidth,
  color = '#000',
  filler,
  style,
}: iSpacer) => {
  const height = Math.round(sizes['gap' + size.toUpperCase()] / 2);

  let computedStyle = {
    marginVertical: height,
    borderBottomWidth: lineWidth || 0,
    borderBottomColor: color,
    borderStyle: 'solid',
  };

  if (!filler) computedStyle = { ...computedStyle, maxHeight: 1, height: 1 };
  return <View style={[styles.spacer, computedStyle, style]} />;
};

const styles = StyleSheet.create({
  spacer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default Spacer;
