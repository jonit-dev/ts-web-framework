import { IEvents, Callback } from './user.types';


export class Eventing {

  public events: IEvents = {}

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

}