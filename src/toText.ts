import { isNaN, isNotEmptyString, isNull, isUndefined } from 'ts-data-validator';

import DataTransformerError from './DataTransformerError';

function toText<T = any>(value: any, defaultValue?: T): string | T {
  if (!isUndefined(value) && !isNaN(value) && !isNull(value)) {
    const text = value.toString()
      .replace(/<p>&nbsp;<\/p>/img, '')
      .replace(/&nbsp;/img, ' ')
      .trim();

    if (isNotEmptyString(text)) {
      return text;
    }
  }

  if (!isUndefined(defaultValue)) {
    return defaultValue;
  }

  throw new DataTransformerError();
}

export default toText;