import { dummyNotes } from '../../assets/dummy-data.js';
import { getIndex } from '../../utils.js';

const addNote = (_, args) => {
  const data = Object.assign(
    {
      id: dummyNotes.length + 1
    },
    args
  );

  dummyNotes.push(data);

  return data;
};

const updateNote = (_, args) => {
  const noteIndex = getIndex(dummyNotes, args.id);
    const note = dummyNotes.find((note) => note.id === args.id);

    dummyNotes[ noteIndex ] = Object.assign(note, args);

    return dummyNotes[ noteIndex ];
}

const deleteNote = (_, args) => {
  const index = getIndex(dummyNotes, args.id);

  dummyNotes.splice(index, 1);
}

export const noteMutations = {
  addNote,
  updateNote,
  deleteNote
};