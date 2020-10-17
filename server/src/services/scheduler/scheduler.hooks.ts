import { hooks } from '@feathersjs/authentication';

export default {
  before: {
    all: [],
    find: [],
    get: [hooks.authenticate('jwt')],
    create: [hooks.authenticate('jwt')],
    update: [hooks.authenticate('jwt')],
    patch: [hooks.authenticate('jwt')],
    remove: [hooks.authenticate('jwt')]
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
