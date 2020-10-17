import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import Scheduler from './scheduler.class';
import hooks from './scheduler.hooks';

declare module '../../declarations' {
  interface ServiceTypes {
    scheduler: Scheduler & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  app.use('/scheduler', new Scheduler(app));
  const service = app.service('scheduler');
  service.hooks(hooks);
}
