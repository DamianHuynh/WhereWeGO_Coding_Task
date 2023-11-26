import {createDraftSafeSelector} from '@reduxjs/toolkit';
import {RootState} from '@shared/store';
import {OmiseCardState} from './payment-slice';

function _getListCard(state: RootState) {
  return state.payment.listCard;
}

export interface CardViewArea extends OmiseCardState {
  expiration: string;
  last4Digit: string;
}

export const getListCard = createDraftSafeSelector(_getListCard, cards =>
  cards.map<CardViewArea>(card => ({
    ...card,
    expiration: `${card.expiration_month}/${card.expiration_year}`,
    last4Digit: card.number.slice(-4),
  })),
);
