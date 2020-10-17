import { Application as ExpressFeathers } from '@feathersjs/express';

export interface ServiceTypes {}

export type Application = ExpressFeathers<ServiceTypes>;

export type UserData = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type Paginate = {
  default: number;
  max: number;
};
