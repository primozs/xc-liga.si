import * as authentication from '@feathersjs/authentication';
const { authenticate } = authentication.hooks;
import { disallow } from 'feathers-hooks-common';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), disallow('external')],
    update: [authenticate('jwt'), disallow('external')],
    patch: [authenticate('jwt'), disallow('external')],
    remove: [authenticate('jwt'), disallow('external')]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
