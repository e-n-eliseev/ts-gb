import { MapKey } from "../types/MapKey";

export class MyMap<K extends MapKey = MapKey, V = any> {
  data = {} as Record<K, V>;

  set(key: K, value: V): void {
    this.data[key] = value;
  }
  //реализованный метод SetAll
  setAll(arr: { key: K; value: V }[]): void {
    arr.forEach(({ key, value }) => this.set(key, value));
  }

  get(key: K): V | undefined {
    return this.data[key];
  }

  getAll(): Record<K, V> {
    return this.data;
  }

  has(key: K): boolean {
    return Boolean(this.data[key]);
  }

  remove(key: K): boolean {
    if (this.has(key)) {
      delete this.data[key];
      return true;
    }

    return false;
  }

  clear(): void {
    this.data = {} as Record<K, V>;
  }
}
