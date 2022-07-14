import { Product } from "./Product";
import { Genre } from "../types/Genre";

export enum TypeBook {
  NEW,
  OLD,
}

export class Book extends Product<TypeBook> {
  author: string;
  genre: Genre;

  constructor(title: string, author: string,type:TypeBook, genre: Genre, price?: number) {
    super(title, 1, type, price);
    this.author = author;
    this.genre = genre;
  }
}
