import { dummyTags, dummyNotes } from '../../assets/dummy-data.js';

export const Relationships = {
 
  Note: {

    // NOTE this is bad because of N+1 problem
    tags: ({ _tagIds }) =>
      dummyTags.filter(({ id }) => _tagIds && _tagIds.includes(id))
  },

  Tag: {

    // NOTE this is bad because of N+1 problem
    notes: ({ id }) =>
      dummyNotes.filter(({ _tagIds }) => _tagIds && _tagIds.includes(id))
  }
}