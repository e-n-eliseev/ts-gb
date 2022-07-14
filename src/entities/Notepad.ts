import { Product } from "./Product";

enum Type {
  BLACK,
  RED,
}

export class Notepad extends Product<Type> {
  constructor(title: string, price?: number) {
    super(title, 1, Type.RED, price);
  }
}
