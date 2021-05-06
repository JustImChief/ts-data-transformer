import { isNaN, isNull, isNumber, isUndefined } from 'ts-data-validator';

import DataTransformerError from './DataTransformerError';
import toString             from './toString';

function toNumber<T = any>(value: any, defaultValue?: T): number | T {
  const string = toString(value, null);
  const number = Number(isNull(string) ? void 0 : string.replace(/,/g, '.'));

  if (isNumber(number)) {
    return number;
  }

  if (!isUndefined(defaultValue)) {
    return defaultValue;
  }

  throw new DataTransformerError();
}

export default toNumber;