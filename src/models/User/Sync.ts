import axios, { AxiosPromise } from 'axios'


interface hasID {
  id?: number
}

export class Sync<T extends hasID> {

  constructor(
    public rootUrl: string
  ) { }

  public async fetch(id: Number): Promise<AxiosPromise> {

    return await axios.get(`${this.rootUrl}/${id}`)
  }

  public async save(data: T): Promise<AxiosPromise> {

    console.log('saving user...');

    const { id } = data
    // record exists => update it
    let response;
    if (id) {
      return await axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      console.log('creating new user');
      return await axios.post(this.rootUrl, data)
    }

  }

}