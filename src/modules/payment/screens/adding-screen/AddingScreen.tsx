import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Image,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  AppButton,
  AppTextInput,
  AppView,
  ScreenHeader,
  BackgroundView,
} from '@components/index';
import {scale} from '@shared/utils';
import {MastercardSecureCode, Omise, VerifiedByVisa} from '@assets/svg';
import images from '@assets/png';
import {useAddingCardForm} from './hooks';
import {useAppDispatch} from '@shared/store';
import {updateListCard} from '@modules/payment/payment-slice';
import OmiseProvider from '@modules/payment/provider/omise';

const AddingScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useAddingCardForm();
  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    if (
      !data.name ||
      !data.cardNumber ||
      !data.securityCode ||
      !data.expiration
    ) {
      Alert.alert('Adding Card Failed', 'You have to fill all card info');
      return;
    }

    const id = await OmiseProvider.createToken({
      security_code: Number(data.securityCode),
      name: data.name,
      city: 'BangKok',
      postal_code: 10320,
      expiration_month: Number(`${data.expiration[0]}${data.expiration[1]}`),
      expiration_year: Number(`20${data.expiration[3]}${data.expiration[4]}`),
      number: data.cardNumber.replaceAll(' ', ''),
    });
    if (!id) {
      Alert.alert(
        'Adding Card Failed',
        'Sorry, your request could not be completed at this time due to a technical issue. Please try again later.',
      );
      return;
    }

    dispatch(
      updateListCard({
        security_code: Number(data.securityCode),
        name: data.name,
        city: 'BangKok',
        postal_code: 10320,
        expiration_month: Number(`${data.expiration[0]}${data.expiration[1]}`),
        expiration_year: Number(`${data.expiration[3]}${data.expiration[4]}`),
        number: data.cardNumber.replaceAll(' ', ''),
        omise_token: id,
      }),
    );
    navigation.goBack();
  };

  return (
    <BackgroundView>
      <ScreenHeader onBackPress={navigation.goBack} />
      <TouchableWithoutFeedback
        style={styles.flexOneStyle}
        onPress={Keyboard.dismiss}>
        <AppView justifyContent="space-between" style={styles.container}>
          <AppView rowGap={scale(40)}>
            <AppView rowGap={scale(22)}>
              <AppView>
                <AppTextInput
                  label="ATM/Debit/Credit card number"
                  placeholder="0000 0000 0000 0000"
                  keyboardType="number-pad"
                  maxLength={19}
                  inputStyle={styles.numberCardInput}
                  onChangeText={value => setData('cardNumber', value)}
                  value={data.cardNumber}
                />
                <AppView
                  flexDirection="row"
                  columnGap={scale(5)}
                  style={styles.imageInput}>
                  <Image source={images.Visa} />
                  <Image source={images.JCB} />
                  <Image source={images.Mastercard} />
                </AppView>
              </AppView>
              <AppTextInput
                label="Name on Card"
                placeholder="Ty Lee"
                onChangeText={value => setData('name', value)}
                value={data.name}
              />
              <AppView flexDirection="row" columnGap={scale(17)}>
                <AppView style={styles.flexOneStyle}>
                  <AppTextInput
                    label="Expiry Day"
                    keyboardType="number-pad"
                    placeholder="MM/YY"
                    maxLength={5}
                    onChangeText={value => setData('expiration', value)}
                    value={data.expiration}
                  />
                </AppView>
                <AppView style={styles.flexOneStyle}>
                  <AppTextInput
                    label="CVV"
                    maxLength={3}
                    keyboardType="number-pad"
                    onChangeText={value => setData('securityCode', value)}
                    value={data.securityCode}
                  />
                </AppView>
              </AppView>
            </AppView>
            <AppView
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              columnGap={scale(20)}>
              <VerifiedByVisa />
              <MastercardSecureCode />
              <Omise />
            </AppView>
          </AppView>
          <AppView>
            <AppButton.RoundedButton title="Add Card" onPress={onSubmit} />
          </AppView>
        </AppView>
      </TouchableWithoutFeedback>
    </BackgroundView>
  );
};

export default AddingScreen;

const styles = StyleSheet.create({
  flexOneStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: scale(17),
    paddingHorizontal: scale(22),
  },
  numberCardInput: {
    width: '70%',
  },
  imageInput: {
    position: 'absolute',
    right: 10,
    bottom: 21,
  },
});
