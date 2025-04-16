export type Order = {
  id: string;
  quantity: number;
  totalPrice: number;
  product: Product;
};

export type Product = {
  name: string;
  price: number;
};

export type CreateOrderRequestDto = {
  userId: string;
  productId: string;
  quantity: number;
};
