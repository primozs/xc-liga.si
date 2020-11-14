import * as authentication from '@feathersjs/authentication';
const { authenticate } = authentication.hooks;
import { disallow } from 'feathers-hooks-common';
import { patchOrCreate } from '../../utils/patchOrCreate';

export default {
  before: {
    all: [authenticate('jwt'), disallow('external')],
    find: [],
    get: [],
    create: [patchOrCreate],
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
