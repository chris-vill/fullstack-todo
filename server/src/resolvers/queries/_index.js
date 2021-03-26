import { noteQueries } from './note.js';
import { tagQueries } from './tag.js';

export const Query = {

  ...noteQueries,
  ...tagQueries
};