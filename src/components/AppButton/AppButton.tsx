import {
  TouchableOpacity as RNButton,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {AppText} from '@components/index';
import {scale} from '@shared/utils';

interface AppButtonProps extends TouchableOpacityProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
}

const Link = (props: AppButtonProps) => {
  const {style, title, titleStyle, ...otherProps} = props;
  const _style = StyleSheet.flatten([styles.linkButtonStyle, style]);
  const _styleButton = StyleSheet.flatten([styles.linkButtonTile, titleStyle]);

  return (
    <RNButton {...otherProps} style={_style}>
      <AppText style={_styleButton}>{title}</AppText>
    </RNButton>
  );
};

const RoundedButton = (props: AppButtonProps) => {
  const {style, title, titleStyle, ...otherProps} = props;
  const _style = StyleSheet.flatten([styles.roundedButtonStyle, style]);
  const _styleButton = StyleSheet.flatten([
    styles.roundedButtonTile,
    titleStyle,
  ]);

  return (
    <RNButton {...otherProps} style={_style}>
      <AppText style={_styleButton}>{title}</AppText>
    </RNButton>
  );
};

const styles = StyleSheet.create({
  linkButtonStyle: {},
  linkButtonTile: {
    color: '#4AD8DA',
    fontSize: scale(18),
    fontWeight: '500',
  },

  roundedButtonStyle: {
    backgroundColor: '#4AD8DA',
    borderRadius: scale(22.5),
    height: scale(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedButtonTile: {
    color: '#FFF',
    fontSize: scale(16),
    fontWeight: '700',
  },
});

const AppButton = {
  Link,
  RoundedButton,
};

export default AppButton;
