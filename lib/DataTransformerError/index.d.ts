declare class DataTransformerError extends Error {
    name: string;
    constructor(error?: DataTransformerErrorType | string);
}
export default DataTransformerError;
export declare type DataTransformerErrorType = {
    message: string;
} & {
    [p: string]: any;
};
