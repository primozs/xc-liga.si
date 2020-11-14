import NeDB from 'nedb';
import path from 'path';
import { Application } from '../declarations';

export default function (app: Application): NeDB<DbSeason> {
  const dbPath = app.get('nedb');
  const Model = new NeDB<DbSeason>({
    filename: path.join(dbPath, 'seasons.db'),
    autoload: true
  });

  return Model;
}
