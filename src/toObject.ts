import { isArray, isJSON, isObject, isUndefined } from 'ts-data-validator';

import DataTransformerError from './DataTransformerError';

function toObject<T = any>(value: any, defaultValue?: T): {[p: string]: any} | T {
  if (isObject(value)) {
    return {...value};
  }

  if (isArray(value)) {
    return [...value].reduce((accumulator, currentValue, currentIndex) => ({
      ...accumulator,
      [`${currentIndex}`]: currentValue,
    }), {});
  }

  if (isJSON(value)) {
    const json = JSON.parse(value);

    return toObject(json, defaultValue);
  }

  if (!isUndefined(defaultValue)) {
    return defaultValue;
  }

  throw new DataTransformerError();
}

export default toObject;