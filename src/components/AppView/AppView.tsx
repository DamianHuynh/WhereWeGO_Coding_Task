import {StyleSheet, View as RNView, ViewProps, ViewStyle} from 'react-native';
import React from 'react';

interface AppViewProps extends ViewProps {
  gap?: ViewStyle['gap'];
  alignItems?: ViewStyle['alignItems'];
  rowGap?: ViewStyle['rowGap'];
  columnGap?: ViewStyle['columnGap'];
  justifyContent?: ViewStyle['justifyContent'];
}

const AppView = (props: AppViewProps) => {
  const {
    style,
    gap,
    alignItems,
    rowGap,
    columnGap,
    justifyContent,
    ...otherProps
  } = props;
  const _style = StyleSheet.flatten([
    {gap, alignItems, rowGap, columnGap, justifyContent},
    style,
  ]);

  return <RNView {...otherProps} style={_style} />;
};

export default AppView;
