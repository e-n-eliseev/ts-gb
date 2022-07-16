export interface IProduct<T> {
  title: string;
  amount: number;
  price?: number;
  type: T;

  getPrice(): number | undefined 
  getAmount(): number;
  canBuy(): boolean 
}
