import React, { useContext } from 'react';
import { List, Text } from '@chakra-ui/react';
import { NoteListItem } from '.';
import { NotesContext } from '../context/NotesContext';

const NotesList = () => {
  const notes = useContext(NotesContext);

  const Notes = !notes 
    ? <div>Loading...</div>
    : notes.map((note, i) => <NoteListItem note={ note } key={ i }/>);

  return (
    <List>
      { Notes }
    </List>
  );
}

export default NotesList;
