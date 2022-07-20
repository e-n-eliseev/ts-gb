import { IProduct } from "./types/Product";
import { MapKey } from "./types/MapKey";
import { Book, TypeBook } from "./entities/Book";
import { Notepad, TypeNotepad } from "./entities/Notepad";
import { Product } from "./entities/Product";
import { MyMap } from "./common/MyMap";

const getPrice = (entity: Book | Notepad): string => {
  return entity.price ? entity.price.toString() : "не продается";
};

//Исправленный вариант функции getFrom
const getFrom = <T extends Product<any>, K extends MapKey = string>(
  obj: Record<K, T>,
  title: K
): T | undefined => {
  return obj[title];
};

//Реализация корзины
class Basket extends MyMap {}
const basket = new Basket();
//Реализация функции добавления в корзину
const addToBasket = (quantity: MapKey, item: any): void =>
  basket.set(quantity, item);

const main = () => {
  //const map = new MyMap<string, Product>();
  //console.log(1, map.getAll());
  //map.set(
  //   "title 1",
  //   new Book("title 1", "author 1", TypeBook.NEW, "fantasy", 5)
  // );
  //console.log(2, map.getAll());
  //map.set("title 2", new Notepad("title 2", TypeNotepad.RED));
  //console.log(3, map.getAll());
  //map.remove("title 2");
  //console.log(4, map.getAll());
  //map.set("title 2", new Notepad("title 2", TypeNotepad.BLACK));
  //console.log(5, map.getAll());
  // map.clear();
  // console.log(5, map.getAll());
  //console.log(getFrom(map.getAll(),"title 2"));

  //Проверка реализации метода setAll
  // map.setAll([
  //   { "title 1": new Book("title 1", "author 1", TypeBook.NEW, "fantasy", 1) },
  //   { "title 2": new Book("title 2", "author 2", TypeBook.OLD, "other", 2) },
  //   { "title 3": new Book("title 3", "author 3", TypeBook.NEW, "fantasy", 3) },
  // ]);

  //Проверка реализации метода addToBasket
  addToBasket(5, {
    "title 1": new Book("title 1", "author 1", TypeBook.NEW, "fantasy", 1),
  });
  addToBasket(6, {
    "title 1": new Book("title 2", "author 2", TypeBook.NEW, "fantasy", 1),
  });
  console.log(basket.getAll());

  //console.log(map.getAll());

  // const books = {
  //   "title 1": new Book("title 1", "author 1", "fantasy", 5),
  //   "title 2": new Book("title 2", "author 2", "other"),
  // };

  // const notepads = {
  //   "title 1": new Notepad("title 1", 5),
  //   "title 2": new Notepad("title 2"),
  // };

  // console.log(getFrom<Book>(books, "title 1"));
  // console.log(getFrom<Notepad>(notepads, "title 3"));
};

main();
