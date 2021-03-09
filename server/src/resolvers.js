import { dummyNotes, dummyTags } from './dummy-data.js';

export const resolvers = {

  Note: {

    // NOTE this is bad because of N+1 problem
    tags: (note) =>
      dummyTags.filter(tag => note.tagIds.includes(tag.id))
  },

  Tag: {

    // NOTE this is bad because of N+1 problem
    notes: (tag) =>
      dummyNotes.filter(note => note.tagIds.includes(tag.id))
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
