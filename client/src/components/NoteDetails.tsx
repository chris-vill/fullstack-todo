import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Text, HStack, CloseButton, Heading } from '@chakra-ui/react';
import { NotesContext } from '../context/NotesContext';
import { Note as NoteType } from '../generated/graphql';

const NoteDetails = (props: any) => {
  const [ notes ] = useContext(NotesContext);
  const params: any = useParams();
  const id: number = Number(params.id);
  const note = notes && (notes as NoteType[]).find(note => note.id === id);

  if (!note) {
    return (
      <Text>Loading...</Text>
    );
  }

  return (<>
    <HStack
      alignItems="center"
      justifyContent="space-between"
      mb="12px"
    >
      <Heading as="h3" size="md">{ note.title }</Heading>
      <Link to="/notes">
        <CloseButton/>
      </Link>
    </HStack>
    <Text>{ note.body }</Text>
    {/* <Text>{ note.tags }</Text> */}
  </>);
}

export default NoteDetails;
