export interface OmiseCard {
  name: string;
  city: string;
  postal_code: number;
  number: string;
  expiration_month: number;
  expiration_year: number;
  security_code: number;
}

export interface OmiseChargeParams {
  description: string;
  amount: number;
  currency: 'thb';
  capture: boolean;
  card: string;
}
