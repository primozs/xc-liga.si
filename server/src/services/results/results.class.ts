import { Service, NedbServiceOptions } from 'feathers-nedb';
import { Application } from '../../declarations';

export class Results extends Service<DbResult> {
  constructor(options: Partial<NedbServiceOptions>, app: Application) {
    super(options);
  }
}
