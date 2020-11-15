// Initializes the `pilots` service on path `/pilots`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Seasons } from './seasons.class';
import createModel from './season.model';
import hooks from './seasons.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    seasons: Seasons & ServiceAddons<DbSeason>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app)
  };

  app.use('/seasons', new Seasons(options, app));

  const service = app.service('seasons');

  // @ts-ignore
  service.hooks(hooks);
}
