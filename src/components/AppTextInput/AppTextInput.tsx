import {
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {scale} from '@shared/utils';
import {AppText, AppView} from '..';

interface AppTextInputProps extends TextInputProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

const AppTextInput = (props: AppTextInputProps) => {
  const {style, label, inputStyle, ...otherProps} = props;
  const _containerStyle = StyleSheet.flatten([styles.containerStyle, style]);
  const _inputStyle = StyleSheet.flatten([styles.inputStyle, inputStyle]);

  return (
    <AppView rowGap={scale(8)}>
      <AppText style={styles.labelStyle}>{label}</AppText>
      <AppView style={_containerStyle}>
        <RNTextInput {...otherProps} style={_inputStyle} />
      </AppView>
    </AppView>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: scale(1.5),
    borderRadius: scale(5),
    borderColor: '#E6E3E6',
    height: scale(56),
    padding: scale(16),
  },
  inputStyle: {
    flex: 1,
    fontSize: scale(16),
  },
  labelStyle: {
    fontSize: scale(15),
    fontWeight: '500',
  },
});

export default AppTextInput;
