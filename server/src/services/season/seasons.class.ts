import { Service, NedbServiceOptions } from 'feathers-nedb';
import { Application } from '../../declarations';

export class Seasons extends Service<DbSeason> {
  constructor(options: Partial<NedbServiceOptions>, app: Application) {
    super(options);
  }
}
