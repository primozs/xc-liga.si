// Initializes the `results` service on path `/results`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Scores } from './scores.class';
import createModel from './score.model';
import hooks from './scores.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    scores: Scores & ServiceAddons<DbScore>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ['$where', '$search']
  };

  app.use('/scores', new Scores(options, app));

  const service = app.service('scores');

  // @ts-ignore
  service.hooks(hooks);
}
