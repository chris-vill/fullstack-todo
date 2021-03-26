import { dummyNotes } from '../../assets/dummy-data.js';

const note = (_, { id }) =>
  dummyNotes.find(note => note.id === id)

const notes = () =>
  dummyNotes

export const noteQueries = {
  note,
  notes
}