import { AxiosResponse } from 'axios';

import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { IUser } from './user.types';

export class User {

  public events: Eventing = new Eventing();
  public sync: Sync<IUser> = new Sync<IUser>("http://localhost:3000/users/")
  public attributes: Attributes<IUser>;

  constructor(attrs: IUser) {
    this.attributes = new Attributes<IUser>(attrs)
  }

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: IUser): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  async fetch(): Promise<void> {

    const id = this.attributes.get('id');

    // if we dont have an ID, we dont have it stored on database and we don't need to fetch data

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an ID')
    }

    const response: AxiosResponse = await this.sync.fetch(id)

    this.set(response.data)
  }






}