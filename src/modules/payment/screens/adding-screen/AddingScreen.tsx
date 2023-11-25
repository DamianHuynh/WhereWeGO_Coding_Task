import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
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

const AddingScreen = () => {
  const navigation = useNavigation();

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
                  inputStyle={styles.numberCardInput}
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
              <AppTextInput label="Name on Card" placeholder="Ty Lee" />
              <AppView flexDirection="row" columnGap={scale(17)}>
                <AppView style={styles.flexOneStyle}>
                  <AppTextInput label="Expiry Day" placeholder="MM/YY" />
                </AppView>
                <AppView style={styles.flexOneStyle}>
                  <AppTextInput label="CVV" />
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
            <AppButton.RoundedButton title="Add Card" />
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
