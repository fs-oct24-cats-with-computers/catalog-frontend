import { Phone } from '../types/Phone';

export const TECH_TABLE_KEYS: Array<keyof Phone> = [
  'screen',
  'resolution',
  'processor',
  'ram',
  'camera',
  'zoom',
  'cell',
];

export const DESC_TABLE_KEYS: Array<keyof Phone> = [
  'screen',
  'resolution',
  'processor',
  'ram',
];

export const CARD_TABLE_KEYS: Array<keyof Phone> = [
  'screen',
  'capacity',
  'ram',
];

export function techSpecsCase<T>(product: T, arrayOfKeys: Array<keyof T>) {
  return arrayOfKeys.reduce((accum: Partial<T>, item) => {
    if (product[item]) {
      accum[item] = product[item];
    }
    return accum;
  }, {});
}
