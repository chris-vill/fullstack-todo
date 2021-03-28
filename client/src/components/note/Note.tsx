import classes from './Note.module.sass';

import React from 'react';
import { ListItem } from '@chakra-ui/react';

const Note = ({ extClass = "" }) => {

  return (
    <ListItem className={ `${ classes.note } ${ extClass }` }>
      This is a list item.
    </ListItem>
  );
}

export default Note;
