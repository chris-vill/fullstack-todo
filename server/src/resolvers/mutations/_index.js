import { noteMutations } from './note.js';
import { tagMutations } from './tag.js';

export const Mutation = {

  ...noteMutations,
  ...tagMutations,
};