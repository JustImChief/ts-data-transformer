declare function toObject<T = any>(value: any, defaultValue?: T): {
    [p: string]: any;
} | T;
export default toObject;
