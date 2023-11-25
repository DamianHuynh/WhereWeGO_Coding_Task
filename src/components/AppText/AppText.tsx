import {StyleSheet, Text as RNText, TextProps} from 'react-native';
import React from 'react';
import {scale} from '@shared/utils';

interface AppTextProps extends TextProps {
  type?: 'header' | 'normal';
}

const AppText = (props: AppTextProps) => {
  const {style, type = 'normal', ...otherProps} = props;
  const _style = StyleSheet.flatten([
    styles.defaultTextStyle,
    styles[`${type}TextStyle`],
    style,
  ]);

  return <RNText {...otherProps} style={_style} />;
};

const styles = StyleSheet.create({
  defaultTextStyle: {
    color: '#000',
  },
  normalTextStyle: {},
  headerTextStyle: {
    fontSize: scale(17),
    fontWeight: '700',
  },
});

export default AppText;
