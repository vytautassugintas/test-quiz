import StaticStrings from './staticStrings';

export const getPrice = price => {
  return price
    ? price.amounts.USD
    : StaticStrings.unknownPrice
}