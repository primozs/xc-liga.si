import * as authentication from '@feathersjs/authentication';
const { authenticate } = authentication.hooks;
import { disallow } from 'feathers-hooks-common';
import { HookContext, Service, Paginated } from '@feathersjs/feathers';

// @ts-ignore
import search from 'feathers-nedb-fuzzy-search';

type PaginatedScore = Paginated<DbScore> & { seasonData: DbSeason };

const addSeason = async (
  context: HookContext<PaginatedScore, Service<PaginatedScore>>
) => {
  const { app, result, params } = context;
  if (!result) return context;
  if (!params.query?.season) return context;

  const season: DbSeason = await app
    .service('seasons')
    .get(params.query.season);

  result.seasonData = season;
  return context;
};

const patchOrCreateScore = async (
  context: HookContext<DbScore, Service<DbScore>>
) => {
  const { data, service } = context;
  if (!data) return context;

  // @ts-ignore
  const { _id, season, pilotId, ...rest } = data;
  const payload = {
    season,
    pilotId,
    ...rest
  };

  const [record] = (await service.find({
    query: { season, pilotId },
    paginate: false
  })) as DbScore[];

  if (record) {
    // @ts-ignore
    const res = (await service.patch(record._id, payload)) as DbScore;

    // set the context.result so that the actual service call (CREATE) will be skiped
    context.result = res;
    return context;
  }

  return context;
};

export default {
  before: {
    all: [],
    find: [search({ fields: ['name'] })],
    get: [],
    create: [authenticate('jwt'), disallow('external'), patchOrCreateScore],
    update: [authenticate('jwt'), disallow('external')],
    patch: [authenticate('jwt'), disallow('external')],
    remove: [authenticate('jwt'), disallow('external')]
  },

  after: {
    all: [],
    find: [addSeason],
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
