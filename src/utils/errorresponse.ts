import { ErrorMessage } from "./enum";

export const errorHandler = (code: ErrorMessage | any) => {
  let response: {
    statusCode: number;
    ErrorMessage: string;
    displayMessage: string;
  };

  switch (code) {
    case ErrorMessage.EMAIL_ALREADY_EXIST:
      response = {
        statusCode: 400,
        ErrorMessage: "Password Mismatch",
        displayMessage: "Password Mismatch",
      };
      break;
    case ErrorMessage.FAILED_TO_CONNECT_DB:
      response = {
        statusCode: 400,
        ErrorMessage: "Password Mismatch",
        displayMessage: "Password Mismatch",
      };
      break;
    case ErrorMessage.FAILED_TO_DELETE_BLOG:
      response = {
        statusCode: 400,
        ErrorMessage: "Password Mismatch",
        displayMessage: "Password Mismatch",
      };
      break;
    case ErrorMessage.FAILED_TO_LOGIN:
      response = {
        statusCode: 400,
        ErrorMessage: "Password Mismatch",
        displayMessage: "Password Mismatch",
      };
      break;
    case ErrorMessage.FAILED_TO_CREATE_USER:
      response = {
        statusCode: 400,
        ErrorMessage: "Password Mismatch",
        displayMessage: "Password Mismatch",
      };
      break;
    case ErrorMessage.FAILED_TO_POST_BLOG:
      response = {
        statusCode: 400,
        ErrorMessage: "Password Mismatch",
        displayMessage: "Password Mismatch",
      };
      break;
    case ErrorMessage.FAILED_TO_UPDATE_BLOG:
      response = {
        statusCode: 400,
        ErrorMessage: "Password Mismatch",
        displayMessage: "Password Mismatch",
      };
      break;
    case ErrorMessage.INCORRECT_PASSWORD:
      response = {
        statusCode: 400,
        ErrorMessage: "Password Mismatch",
        displayMessage: "Password Mismatch",
      };
      break;
    case ErrorMessage.INVALID_BLOGID:
      response = {
        statusCode: 400,
        ErrorMessage: "Password Mismatch",
        displayMessage: "Password Mismatch",
      };
      break;
    case ErrorMessage.SESSION_EXPIRED:
      response = {
        statusCode: 400,
        ErrorMessage: "Password Mismatch",
        displayMessage: "Password Mismatch",
      };
      break;
    case ErrorMessage.TOKEN_REQUIRED:
      response = {
        statusCode: 400,
        ErrorMessage: "Password Mismatch",
        displayMessage: "Password Mismatch",
      };
      break;
    case ErrorMessage.USER_NOT_FOUND:
      response = {
        statusCode: 404,
        ErrorMessage: "Password Mismatch",
        displayMessage: "Password Mismatch",
      };
      break;
    default:
      response = {
        statusCode: 500,
        ErrorMessage: "Internal Server Error",
        displayMessage: "Internal Server Error",
      };
  }

  return response;
};
