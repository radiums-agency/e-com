import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;


export const actions: Actions = {
  default: async ({request}) => {
    const data = Object.fromEntries(await request.formData())
    console.log(data)
  }
};