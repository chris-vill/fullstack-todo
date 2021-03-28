import classes from './NotesList.module.sass';

import React from 'react';
import { List, ListItem } from '@chakra-ui/react';
import { Note } from '../';
import { useNotesQuery } from '../../generated/graphql';


const NotesList = ({ extClass = "" }) => {

  const { data: notes } = useNotesQuery();
  console.log(notes);

  return (
    <List className={ `${ classes.notesList } ${ extClass }` }>
      <Note/>
      <Note/>
      <Note/>
    </List>
  );
}

export default NotesList;
