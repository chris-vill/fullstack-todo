import { dummyNotes, dummyTags } from './dummy-data.js';
import { getIndex } from './utils.js';

export const resolvers = {

  Note: {

    // NOTE this is bad because of N+1 problem
    tags: ({ _tagIds }) =>
      dummyTags.filter(({ id }) => _tagIds.includes(id))
  },

  Tag: {

    // NOTE this is bad because of N+1 problem
    notes: ({ id }) =>
      dummyNotes.filter(({ _tagIds }) => _tagIds.includes(id))
  },

  Query: {

    note: (_, { id }) =>
      dummyNotes.find(note => note.id === id),

    notes: () =>
      dummyNotes,

    tag: (_, { id }) =>
      dummyTags.find(tag => tag.id === id),

    tags: () =>
      dummyTags
  },

  Mutation: {

    addNote: (_, args) => {
      const data = Object.assign(
        {
          id: dummyNotes.length + 1
        },
        args
      );

      dummyNotes.push(data);

      return data;
    },

    updateNote: (_, args) => {
      const noteIndex = getIndex(dummyNotes, args.id);
      const note = dummyNotes.find((note) => note.id === args.id);

      dummyNotes[ noteIndex ] = Object.assign(note, args);

      return dummyNotes[ noteIndex ];
    },

    deleteNote: (_, args) => {
      const index = getIndex(dummyNotes, args.id);
      const note = dummyNotes.find(note => note.id === args.id);
      dummyNotes.splice(index, 1);
    },

    addTag: (_, args) => {
      const data = Object.assign({}, args);

      data.id = dummyTags.length + 1;
      dummyTags.push(data);

      return data;
    },

    deleteTag: (_, args) => {
      const index = getIndex(dummyTags, args.id);
      const note = dummyTags.find(tag => tag.id === args.id);
      dummyTags.splice(index, 1);
    }
  }
};
