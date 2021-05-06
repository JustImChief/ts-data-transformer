import { isArray, isJSON, isObject, isUndefined } from 'ts-data-validator';

import DataTransformerError from './DataTransformerError';

function toArray<T = any>(value: any, defaultValue?: T): any[] | T {
  if (isArray(value)) {
    return [...value];
  }

  if (isObject(value)) {
    return Object.values(value);
  }

  if (isJSON(value)) {
    try {
      const json = JSON.parse(value);

      return toArray(json, defaultValue);
    } catch (e) {
      if (!isUndefined(defaultValue)) {
        return defaultValue;
      }

      throw new DataTransformerError(e);
    }
  }

  if (!isUndefined(defaultValue)) {
    return defaultValue;
  }

  throw new DataTransformerError();
}

export default toArray;