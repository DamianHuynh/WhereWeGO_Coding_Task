import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {BackIcon} from '@assets/svg';
import AppText from '@components/AppText';
import {scale} from '@shared/utils';

interface ScreenHeaderProps {
  title?: string;
  onBackPress?: () => void;
  RightSideComponent?: () => React.JSX.Element;
}

const ScreenHeader = (props: ScreenHeaderProps) => {
  const {title, onBackPress, RightSideComponent} = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <TouchableOpacity onPress={onBackPress}>
          <BackIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.midSide}>
        <AppText type="header">{title}</AppText>
      </View>
      <View style={styles.rightSide}>{RightSideComponent?.()}</View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    height: scale(44),
    paddingVertical: scale(9),
    paddingHorizontal: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    flex: 1,
  },
  midSide: {
    flex: 2,
    alignItems: 'center',
  },
  rightSide: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
