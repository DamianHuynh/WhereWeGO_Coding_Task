import {createSlice} from '@reduxjs/toolkit';

interface PaymentState {
  value: number;
}

const initialState: PaymentState = {
  value: 0,
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
});

export default paymentSlice.reducer;
