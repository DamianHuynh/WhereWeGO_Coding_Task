import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListingScreen from '@modules/payment/screens/listing-screen/ListingScreen';
import AddingScreen from '@modules/payment/screens/adding-screen/AddingScreen';

export const Stack = createNativeStackNavigator<PaymentNavigatorParamList>();

export type PaymentNavigatorParamList = {
  Listing: undefined;
  Adding: undefined;
};

const PaymentNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Listing" component={ListingScreen} />
      <Stack.Screen name="Adding" component={AddingScreen} />
    </Stack.Navigator>
  );
};

export default PaymentNavigator;
