import NeDB from 'nedb';
import path from 'path';
import { Application } from '../../declarations';

export default function (app: Application): NeDB<DbPilot> {
  const dbPath = app.get('nedb');
  const Model = new NeDB<DbPilot>({
    filename: path.join(dbPath, 'pilots.db'),
    autoload: true
  });

  return Model;
}
