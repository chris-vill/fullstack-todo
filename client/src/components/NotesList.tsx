import React, { useContext } from 'react';
import { List, Text } from '@chakra-ui/react';
import { NoteListItem } from '.';
import { NotesContext } from '../context/NotesContext';
import { Note as NoteType } from '../generated/graphql';

const NotesList = () => {
  const [ notes ] = useContext(NotesContext);

  const Notes = !notes 
    ? <div>Loading...</div>
    : (notes as NoteType[]).map((note, i) => <NoteListItem note={ note } key={ i }/>);

  return (
    <List>
      { Notes }
    </List>
  );
}

export default NotesList;
