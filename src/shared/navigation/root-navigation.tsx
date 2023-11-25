import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';

import PaymentNavigator, {PaymentNavigatorParamList} from './payment-navigator';

export const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Payment: NavigatorScreenParams<PaymentNavigatorParamList>;
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Payment" component={PaymentNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
