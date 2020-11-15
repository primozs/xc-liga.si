import { Application } from '../declarations';
import users from './users/users.service';
import scheduler from './scheduler/scheduler.service';
import pilots from './pilots/pilots.service';
import seasons from './season/seasons.service';
import scores from './scores/scores.service';

export default function (app: Application): void {
  app.configure(users);
  app.configure(pilots);
  app.configure(seasons);
  app.configure(scores);
  app.configure(scheduler);
}
