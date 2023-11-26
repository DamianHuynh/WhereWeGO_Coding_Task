import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OmiseCard} from '../provider/omise';

export interface OmiseCardState extends OmiseCard {
  omise_token: string;
}
interface PaymentState {
  listCard: OmiseCardState[];
}

const initialState: PaymentState = {
  listCard: [],
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    updateListCard: (state, action: PayloadAction<OmiseCardState>) => {
      state.listCard.push(action.payload);
    },
  },
});

export const {updateListCard} = paymentSlice.actions;

export default paymentSlice.reducer;
