//@ts-ignore
import Omise from 'omise-react-native';
import {OMISE_PUB, OMISE_SEC} from '@env';
import {OmiseCard, OmiseChargeParams} from './type';
Omise.config(OMISE_PUB, '2017-11-12');

export default class OmiseProvider {
  static async createToken(card: OmiseCard) {
    try {
      const result = await Omise.createToken({card});
      return result.id;
    } catch (error) {
      const _error = await error;
      console.log('[createToken -  error]', _error);
      return false;
    }
  }

  static async createSource() {
    try {
      const result = await Omise.createSource({
        type: 'internet_banking_bbl',
        amount: 500000,
        currency: 'thb',
      });
      console.log('[createSource - result]', JSON.stringify(result, null, 2));
    } catch (error) {
      const _error = await error;
      console.log('[createToken -  error]', _error);
      return null;
    }
  }

  static async createCharge(params: OmiseChargeParams) {
    try {
      Omise.config(OMISE_SEC, '2017-11-12');
      const result = await await Omise.createCharge(params);
      return result.paid;
    } catch (error) {
      const _error = await error;
      console.log('[createCharge -  error]', _error);
      return false;
    }
  }
}
