import * as authentication from '@feathersjs/authentication';
const { authenticate } = authentication.hooks;
import { disallow } from 'feathers-hooks-common';

export default {
  before: {
    all: [authenticate('jwt'), disallow('external')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
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
