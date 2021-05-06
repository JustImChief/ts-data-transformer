export type { DataTransformerErrorType }   from './DataTransformerError';
export { default as DataTransformerError } from './DataTransformerError';
import { default as toArray }              from './toArray';
import { default as toBoolean }            from './toBoolean';
import { default as toDate }               from './toDate';
import { default as toInteger }            from './toInteger';
import { default as toJSON }               from './toJSON';
import { default as toNumber }             from './toNumber';
import { default as toObject }             from './toObject';
import { default as toString }             from './toString';
import { default as toText }               from './toText';

const DataTransformer = {
  toArray,
  toBoolean,
  toDate,
  toInteger,
  toJSON,
  toNumber,
  toObject,
  toString,
  toText,
};

export default DataTransformer;
export {
  toArray,
  toBoolean,
  toDate,
  toInteger,
  toJSON,
  toNumber,
  toObject,
  toString,
  toText,
};