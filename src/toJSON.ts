import { isNotEmptyString, isUndefined } from 'ts-data-validator';

import DataTransformerError from './DataTransformerError';

function toJSON<T = any>(value: any, defaultValue?: T): string | T {
  try {
    const json = JSON.stringify(value);

    if (isNotEmptyString(json)) {
      return json;
    }
  } catch (e) {
    if (!isUndefined(defaultValue)) {
      return defaultValue;
    }

    throw new DataTransformerError();
  }

  if (!isUndefined(defaultValue)) {
    return defaultValue;
  }

  throw new DataTransformerError();
}

export default toJSON;