import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Text, Box, CloseButton, Heading } from '@chakra-ui/react';
import { NotesContext } from '../context/NotesContext';
import { Note as NoteType } from '../generated/graphql';

const NoteDetails = (props: any) => {
  const notes: NoteType[] = useContext(NotesContext);
  const id: number = Number(props.match.params.id);
  const note = notes && notes.find(note => note.id === id);

  if (!note) {
    return (
      <Text>Loading...</Text>
    );
  }

  return (<>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb="12px"
    >
      <Heading as="h3" size="md">{ note.title }</Heading>
      <Link to="/notes">
        <CloseButton/>
      </Link>
    </Box>
    <Text>{ note.body }</Text>
    {/* <Text>{ note.tags }</Text> */}
  </>);
}

export default NoteDetails;
