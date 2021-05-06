import { isNotEmptyString, isUndefined } from 'ts-data-validator';

import DataTransformerError from './DataTransformerError';
import toText               from './toText';

function toString<T = any>(value: any, defaultValue?: T): string | T {
  const string = toText(value, '')
    .replace(/(<([^>]+)>)/img, '')
    .trim();

  if (isNotEmptyString(string)) {
    return string;
  }

  if (!isUndefined(defaultValue)) {
    return defaultValue;
  }

  throw new DataTransformerError();
}

export default toString;