class DataTransformerError extends Error {
  name = 'DataTransformerError';

  constructor(error?: DataTransformerErrorType | string) {
    super(typeof error !== 'string' ? error.message : error);
  }
}

export default DataTransformerError;

export type DataTransformerErrorType = {message: string} & {[p: string]: any};
