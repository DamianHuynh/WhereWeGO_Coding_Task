export const maskCreditCardNumber = (creditNumber: string) => {
  // eslint-disable-next-line curly
  if (!creditNumber) return '';
  const standardFormat = /\w(?=.*\d{4})/g;
  if (creditNumber.match(standardFormat)) {
    return creditNumber.replace(standardFormat, '•');
  }
  return creditNumber;
};
