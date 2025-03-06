/* eslint-disable @typescript-eslint/no-explicit-any */
class ApiResponse {
  statusCode: number;
  data: any;
  status: boolean;
  message: string;

  constructor({
    statusCode,
    message = 'Something went wrong',
    data = null,
    status = statusCode < 400,
  }: {
    statusCode: number;
    message: string;
    data?: any;
    status?: boolean;
  }) {
    this.statusCode = statusCode;
    this.data = data;
    this.status = status;
    this.message = message;
  }
}

class ApiError extends Error {
  statusCode: number;
  data: any;
  errors: any[];
  status: boolean;

  constructor({
    statusCode,
    message = 'Something went wrong',
    status = false,
    data = null,
    errors = [],
    stack = '',
  }: {
    statusCode: number;
    message: string;
    status: boolean;
    data?: any;
    errors?: any[];
    stack?: string;
  }) {
    super(message);
    this.statusCode = statusCode;
    this.status = status;
    this.data = data;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError, ApiResponse };
