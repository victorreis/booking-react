import { INTERNAL_SERVER_ERROR } from '../../Config/ErrorMessages.config';

export const requestErrorHandler = (error: Error) => {
  console.error(error?.message || INTERNAL_SERVER_ERROR);
  throw new Error(error?.message || INTERNAL_SERVER_ERROR);
};
