export class Attributes<T> {

  constructor(
    private _data: T
  ) { }

  // K can only be one of the keys of T (IUser)
  // argument will only be of type K (name, age, id)
  public get<K extends keyof T>(key: K): T[K] {
    return this._data[key]
  }

  public set(update: T): void {
    this._data = {
      ...this._data,
      ...update
    }
  }


}