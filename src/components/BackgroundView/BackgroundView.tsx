import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface BackgroundViewProps {
  children: React.ReactNode;
}

const BackgroundView = (props: BackgroundViewProps) => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

export default BackgroundView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
