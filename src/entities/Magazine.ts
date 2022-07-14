import { Product } from "./Product";

enum TypeMagazine {
  COMICS,
  POPULAR_SCIENCE,
}

export class Magazine extends Product<TypeMagazine> {

  constructor(title: string, amount:number, price?: number) {
    super(title, amount, TypeMagazine.COMICS, price);
  }
}
