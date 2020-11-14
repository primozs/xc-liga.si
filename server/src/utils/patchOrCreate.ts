import { HookContext, Service } from '@feathersjs/feathers';

export const patchOrCreate = async <T>(context: HookContext<T, Service<T>>) => {
  const { data, service } = context;
  if (!data) return context;

  // @ts-ignore
  const { _id, ...rest } = data;
  const payload = {
    ...rest
  };

  const [record] = (await service.find({
    query: { _id },
    paginate: false
  })) as T[];

  if (record) {
    // @ts-ignore
    const res = (await service.patch(record._id, payload)) as T;

    // set the context.result so that the actual service call (CREATE) will be skiped
    context.result = res;
    return context;
  }

  return context;
};
