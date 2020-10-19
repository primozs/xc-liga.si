import NeDB from 'nedb';
import path from 'path';
import { Application } from '../declarations';

export default function (app: Application): NeDB<DbResult> {
  const dbPath = app.get('nedb');
  const Model = new NeDB<DbResult>({
    filename: path.join(dbPath, 'results.db'),
    autoload: true
  });

  return Model;
}
