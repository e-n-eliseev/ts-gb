import { Product } from "./Product";

export enum TypeNotepad {
  BLACK,
  RED,
}

export class Notepad extends Product<TypeNotepad> {
  constructor(title: string,type:TypeNotepad, price?: number) {
    super(title, 1, type, price);
  }
}
