// Initializes the `pilots` service on path `/pilots`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Pilots } from './pilots.class';
import createModel from './pilots.model';
import hooks from './pilots.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    pilots: Pilots & ServiceAddons<DbPilot>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  app.use('/pilots', new Pilots(options, app));

  const service = app.service('pilots');

  // @ts-ignore
  service.hooks(hooks);
}
