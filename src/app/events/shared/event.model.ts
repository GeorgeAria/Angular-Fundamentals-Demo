import { ISession } from './session.model';

export interface IEvent{
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;

  //THe "?" after "location" means that this value can be null.
  location?: {
    address: string;
    city: string;
    country: string;
  };
  onlineUrl?: string;
  sessions: ISession[];
}
