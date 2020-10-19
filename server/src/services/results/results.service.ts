// Initializes the `results` service on path `/results`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Results } from './results.class';
import createModel from '../../models/results.model';
import hooks from './results.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    results: Results & ServiceAddons<DbResult>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/results', new Results(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('results');

  service.hooks(hooks);
}
