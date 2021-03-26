import { Relationships } from './relationships/_index.js';
import { Mutation } from './mutations/_index.js';
import { Query } from './queries/_index.js';

export const resolvers = {
  ...Relationships,
  Query,
  Mutation
};
