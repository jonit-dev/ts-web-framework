
export interface IUser {
  id?: number,
  name?: string,
  age?: number
}

export type Callback = () => void


export interface IEvents {
  [key: string]: Callback[]
}