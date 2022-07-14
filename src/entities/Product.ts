import { IProduct } from "../types/Product";

export class Product<T = any> implements IProduct<T> {
  title: string;
  amount: number;
  price?: number;
  type: T;

  constructor(title: string, amount: number, type: T, price?: number) {
    this.title = title;
    this.amount = amount;
    this.type = type;
    this.price = price;
  }

  getPrice(): number | undefined {
    return this.price;
  }

  canBuy(): boolean {
    return typeof this.price === "number";
  }

  getAmount(): number {
    return this.amount;
  }

  showData(): void{
      console.log(
        `${this.title} - ${this.type} - ${this.price}`
      );
  };
  
  buy(amount:number, money:number):void{
    if (!this.canBuy()) {
      console.log("Вы не можете приобрести данный товар, его нет в наличии!")
    }
    if (this.amount<amount) {
      console.log("На складе нет необходимого количества товара!");
    }
    if (this.price&&(this.price * amount)<money) {
      console.log("У вас недостаточно средств для приобретения такого количества товара!");
    }
    console.log("Товар приобретен!");
  }
}
