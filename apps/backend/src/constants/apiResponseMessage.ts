export enum ApiResponseMessage {
  // Success
  ORDER_CREATED = "Order created successfully",
  ORDER_FETCHED = "Orders fetched successfully",

  // Errors
  INSUFFICIENT_BALANCE = "Insufficient balance",
  OUT_OF_STOCK = "Product out of stock",
  RATE_LIMIT = "Too many requests, please try again later (rate limit)",
  NOT_FOUND = "User or Product not found",
  USER_ID_REQUIRED = "User ID is required",
  ORDER_CREATE_FAIL = "Failed to create order",
  ORDER_FETCH_FAIL = "Failed to fetch orders",
  DEFAULT = "Something went wrong",
}
