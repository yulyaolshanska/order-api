export enum ApiResponseMessage {
  // Success
  ORDER_CREATED = "Order created successfully",
  ORDER_FETCHED = "Orders fetched successfully",

  // Errors
  INSUFFICIENT_BALANCE = "Insufficient balance",
  OUT_OF_STOCK = "Product out of stock",
  RATE_LIMIT = "Too many requests from this user (rate limit)",
  NOT_FOUND = "User or Product not found",
  USER_ID_REQUIRED = "User ID is required",
  ORDER_CREATE_FAIL = "Failed to create order",
  ORDER_FETCH_FAIL = "Failed to fetch orders",
  DEFAULT = "Something went wrong",
}

const errorMessageMap: Record<string, string> = {
  [ApiResponseMessage.INSUFFICIENT_BALANCE]: "Your balance is too low.",
  [ApiResponseMessage.OUT_OF_STOCK]: "The product is currently out of stock.",
  [ApiResponseMessage.RATE_LIMIT]: "Too many requests. Try again later.",
  [ApiResponseMessage.NOT_FOUND]: "User or product was not found.",
};

export const getErrorMessage = (message?: string): string => {
  return errorMessageMap[message ?? ""] || ApiResponseMessage.DEFAULT;
};
