import { Product } from "./Product";

enum Type {
  COMICS,
  POPULAR_SCIENCE,
}

export class Magazine extends Product<Type> {

  constructor(title: string, amount:number, price?: number) {
    super(title, amount, Type.COMICS, price);
  }
}
