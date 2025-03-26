export class Result<T> {
    constructor(
      public value: T | null,
      public isSuccess: boolean,
      public error: Error
    ) {}
  
    static success<T>(value: T): Result<T> {
      return new Result<T>(value, true, ErrorNone);
    }
  
    static failure<T>(error: Error): Result<T> {
      return new Result<T>(null, false, error);
    }
  }
  
  export class Error {
    constructor(public message: string, public code?: string) {}
  }
  
  export const ErrorNone = new Error('No error'); 