import classes from './NotesList.module.sass';

import React from 'react';
import { List } from '@chakra-ui/react';
import { Note } from '../';
import { useNotesQuery } from '../../generated/graphql';

const NotesList = ({ extClass = "" }) => {

  const { data, loading } = useNotesQuery();
  const notes = data?.notes;

  const Notes = loading 
    ? <div>Loading...</div>
    : notes?.map((note, i) => <Note note={ note } key={ i }/>);

  return (
    <List className={ `${ classes.notesList } ${ extClass }` }>
      { Notes }
    </List>
  );
}

export default NotesList;
