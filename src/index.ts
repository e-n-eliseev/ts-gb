import { Book } from "./entities/Book";
import { Notepad } from "./entities/Notepad";
import { Product } from "./entities/Product";
import { MyMap } from "./common/MyMap";

const getPrice = (entity: Book | Notepad): string => {
  return entity.price ? entity.price.toString() : "не продается";
};

const getFrom = <T extends Product<any>>(
  obj: Record<string, T>,
  title: string
): T | undefined => {
  return obj[title];
};

const main = () => {
  const map = new MyMap<string, Product>();
  console.log(1, map.getAll());

  map.set("title 1", new Book("title 1", "author 1", "fantasy", 5));
  console.log(2, map.getAll());

  map.set("title 2", new Notepad("title 2"));
  console.log(3, map.getAll());

  map.remove("title 2");
  console.log(4, map.getAll());

  map.set("title 2", new Notepad("title 2"));
  console.log(5, map.getAll());

  map.clear();
  console.log(5, map.getAll());

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

