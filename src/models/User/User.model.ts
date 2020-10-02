import { Callback, IEvents, IUser } from './user.types';
import axios, { AxiosResponse } from 'axios'
import { Eventing } from './Eventing';
import { Sync } from './Sync'
import { Attributes } from './Attributes';

export class User {

  public events: Eventing = new Eventing();
  public sync: Sync<IUser> = new Sync<IUser>("http://localhost:3000/users/")
  public attributes: Attributes<IUser>;

  constructor(attrs: IUser) {

    this.attributes = new Attributes<IUser>(attrs)


  }






}