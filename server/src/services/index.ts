import { Application } from '../declarations';
import users from './users/users.service';
import scheduler from './scheduler/scheduler.service';
import results from './results/results.service';
import pilots from './pilots/pilots.service';

export default function (app: Application): void {
  app.configure(users);
  app.configure(results);
  app.configure(pilots);
  app.configure(scheduler);
}
