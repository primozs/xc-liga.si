// Initializes the `pilots` service on path `/pilots`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Pilots } from './pilots.class';
import createModel from '../../models/pilots.model';
import hooks from './pilots.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    pilots: Pilots & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pilots', new Pilots(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pilots');

  service.hooks(hooks);
}
