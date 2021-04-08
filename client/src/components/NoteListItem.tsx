import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, Text, IconButton } from '@chakra-ui/react';
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { NoteComponentType } from '../types';

const Note = ({
  note, extClass

}: NoteComponentType) => {

  function deleteNote() {
    console.log("DELETE");
    console.log(note);
  }

  return (
    <ListItem display="flex" mb="12px">
      <IconButton
        onClick={ deleteNote }
        aria-label="Delete Note"
        icon={ <FaTrashAlt/> }
        colorScheme="red"
        h="24px"
        maxW="24px"
        minW="24px"
        mr="12px"
      />
      <Link to={ `/edit-note/${ note.id }` }>
        <IconButton
          aria-label="Edit Note"
          icon={ <FaPen/> }
          colorScheme="blue"
          h="24px"
          maxW="24px"
          minW="24px"
          mr="12px"
        />
      </Link>
      <Link to={ `/note/${ note.id } `}>
        <Text cursor="pointer">{ note.title }</Text>
      </Link>
    </ListItem>
  );
}

export default Note;
