import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {OMISE_PUB, OMISE_SEC} from '@env';

const AddingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OMISE_PUB: {OMISE_PUB}</Text>
      <Text>OMISE_SEC: {OMISE_SEC}</Text>
    </View>
  );
};

export default AddingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
