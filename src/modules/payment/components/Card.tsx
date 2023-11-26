import React from 'react';
import {Alert, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {AppText, AppView} from '@components/index';
import {CardViewArea} from '../payment-slice/payment-selector';
import {scale} from '@shared/utils';
import images from '@assets/png';
import OmiseProvider from '../provider/omise/omise';

interface CardProps extends CardViewArea {}

const Card = (props: CardProps) => {
  const {name, last4Digit, expiration, omise_token} = props;

  const onPress = async () => {
    if (!omise_token) {
      Alert.alert(
        'Adding Card Failed',
        'Sorry, your request could not be completed at this time due to a technical issue. Please try again later.',
      );
    }
    const amount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
    const isSuccess = await OmiseProvider.createCharge({
      amount,
      capture: true,
      card: omise_token,
      currency: 'thb',
      description: `Charge this card ${amount} thb`,
    });

    Alert.alert(
      `Transaction ${isSuccess ? 'Successfully' : 'Failed'}`,
      `You're charge this card ${amount} thb`,
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <AppView style={styles.cardContainer} gap={scale(15)}>
        <Image source={images.VisaCard} />
        <AppView flexDirection="row" alignItems="center" gap={scale(15)}>
          <AppText style={styles.maskedNumberText}>••••</AppText>
          <AppText style={styles.maskedNumberText}>••••</AppText>
          <AppText style={styles.maskedNumberText}>••••</AppText>
          <AppText style={styles.last4DigitText}>{last4Digit}</AppText>
        </AppView>
        <AppView flexDirection="row" justifyContent="space-between">
          <AppView gap={scale(15)}>
            <AppText style={styles.labelText}>Name on Card</AppText>
            <AppText style={styles.valueText}>{name}</AppText>
          </AppView>
          <AppView gap={scale(15)}>
            <AppText style={styles.labelText}>Expires</AppText>
            <AppText style={styles.valueText}>{expiration}</AppText>
          </AppView>
        </AppView>
      </AppView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: scale(30),
    paddingLeft: scale(30),
    paddingRight: scale(70),
    paddingBottom: scale(20),
    backgroundColor: '#fff',
    shadowColor: '#00000026',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    borderRadius: scale(13),
    elevation: 24,
  },
  last4DigitText: {
    color: '#808080',
    fontSize: scale(16),
    fontWeight: '500',
  },
  maskedNumberText: {
    color: '#808080',
    fontSize: scale(35),
    fontWeight: '400',
    letterSpacing: scale(-2),
  },
  labelText: {
    color: '#808080',
    fontSize: scale(10),
    fontWeight: '500',
  },
  valueText: {
    fontSize: scale(13),
    fontWeight: '500',
  },
});

export default Card;
