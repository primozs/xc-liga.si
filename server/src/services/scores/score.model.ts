import NeDB from 'nedb';
import path from 'path';
import { Application } from '../../declarations';

export default function (app: Application): NeDB<DbScore> {
  const dbPath = app.get('nedb');
  const Model = new NeDB<DbScore>({
    filename: path.join(dbPath, 'scores.db'),
    autoload: true
  });

  Model.persistence.setAutocompactionInterval(1000 * 60 * 60);

  return Model;
}
