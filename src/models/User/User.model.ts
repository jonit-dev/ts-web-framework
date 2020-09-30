import { Callback, IEvents, IUser } from './user.types';
import axios, { AxiosResponse } from 'axios'

export class User {

  public events: IEvents = {}

  constructor(
    private _data: IUser
  ) { }

  public get<K extends keyof IUser>(propName: K): string | number | undefined {
    return this._data[propName]
  }

  public set(update: IUser): void {
    this._data = {
      ...this._data,
      ...update
    }
  }

  public on(eventName: string, callback: Callback): void {
    this.events[eventName] ? this.events[eventName].push(callback) : this.events[eventName] = [callback]
  }

  public trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || !handlers.length) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    })


  }

  public async fetch(): Promise<void> {
    console.log('fetching...');
    const response = await axios.get(`http://localhost:3000/users/${this.get('id')}`)
    this.set(response.data)
  }

  public async save(): void {

    const id = this.get('id')
    // record exists => update it
    let response;
    if (id) {
      response = await axios.put(`http://localhost:3000/user/${id}`, this._data)
    } else {
      response = await axios.post('http://localhost:3000/users', this._data)
    }



  }


}