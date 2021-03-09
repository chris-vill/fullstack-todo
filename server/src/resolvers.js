import { dummyNotes, dummyTags } from './dummy-data.js';

export const resolvers = {

  Note: {
    tags: (note) =>
      dummyTags.filter(tag => note.tagIds.includes(tag.id))
  },

  Query: {

    note: (_, args) =>
      dummyNotes.find(note => note.id === args.id),

    notes: () =>
      dummyNotes,

    tag: (_, args) =>
      dummyTags.find(tag => tag.id === args.id),

    tags: () =>
      dummyTags
  }
};
