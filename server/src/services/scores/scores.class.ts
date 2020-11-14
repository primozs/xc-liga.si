import { Service, NedbServiceOptions } from 'feathers-nedb';
import { Application } from '../../declarations';

export class Scores extends Service<DbScore> {
  constructor(options: Partial<NedbServiceOptions>, app: Application) {
    super(options);
  }
}
