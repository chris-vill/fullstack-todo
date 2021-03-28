import classes from './Note.module.sass';

import React from 'react';
import { NoteComponentType } from '../../types';
import { ListItem } from '@chakra-ui/react';

const Note = ({
  note, extClass

}: NoteComponentType) => {
  return (
    <ListItem className={ `${ classes.note } ${ extClass }` }>
      { note.title }
    </ListItem>
  );
}

export default Note;
