import {useCallback, useState} from 'react';

interface AddingCardForm {
  name: string;
  cardNumber: string;
  expiration: string;
  securityCode: string;
}
type ReturnHookType = [
  AddingCardForm,
  (key: keyof AddingCardForm, value: string) => void,
];

export function useAddingCardForm(): ReturnHookType {
  const [data, setFormValues] = useState<ReturnHookType[0]>({
    name: '',
    cardNumber: '',
    expiration: '',
    securityCode: '',
  });

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s?/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  const formatExpiration = (value: string, prv: string) => {
    return value.length === 2 && prv.length === 1 ? (value += '/') : value;
  };

  const setData: ReturnHookType[1] = useCallback((key, value) => {
    if (key === 'cardNumber') {
      return setFormValues(prv => ({...prv, [key]: formatCardNumber(value)}));
    }

    if (key === 'expiration') {
      return setFormValues(prv => ({
        ...prv,
        [key]: formatExpiration(value, prv.expiration),
      }));
    }

    setFormValues(prv => ({...prv, [key]: value}));
  }, []);

  return [data, setData];
}
