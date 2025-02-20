export declare abstract class CustomError extends Error {
    abstract statusCode: number;
    constructor(message: string);
    abstract serializeErrors(): Array<{
        message: string;
        field?: string;
    }>;
}
