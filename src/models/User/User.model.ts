import { Callback, IEvents, IUser } from './user.types';
import axios, { AxiosResponse } from 'axios'
import { Eventing } from './Eventing';

export class User {

  private _events = new Eventing();


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



  public async fetch(): Promise<void> {
    if (this.get('id')) {
      console.log('fetching...');
      const response = await axios.get(`http://localhost:3000/users/${this.get('id')}`)
      this.set(response.data)

    }
  }

  public async save(): Promise<void> {

    console.log('saving user...');

    const id = this.get('id')
    // record exists => update it
    let response;
    if (id) {
      response = await axios.put(`http://localhost:3000/users/${id}`, this._data)
    } else {
      console.log('creating new user');
      response = await axios.post('http://localhost:3000/users/', this._data)
    }



  }


}