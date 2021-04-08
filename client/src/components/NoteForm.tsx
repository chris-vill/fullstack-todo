import React, { useContext, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { FormControl, Input, Textarea, ButtonGroup, Button } from '@chakra-ui/react';
import { NotesContext } from '../context/NotesContext';
import { Note as NoteType } from '../generated/graphql';

const NoteForm = () => {
  const [ notes, addNote ] = useContext(NotesContext);
  const { pathname } = useLocation();
  const params: any = useParams();
  const id = Number(params.id);
  const note = !isNaN(id) && notes && (notes as NoteType[]).find(note => note.id === id);
  const defaultValue: NoteType = {
    title: "",
    body: ""
  };
  const [newNote, setValue] = useState(note || defaultValue);

  function handleInputChange(e: any) {
    const { value, name } = e.target;

    setValue((prevState: NoteType) => ({
      ...prevState,
      [ name ]: value
    }));
  }

  const ActionButton = pathname.includes("edit-note")
    ? <Button onClick={ editNote } colorScheme="twitter">Edit</Button>
    : <Button onClick={ createNote } colorScheme="twitter">Create</Button>;

  async function createNote() {
    let result = await addNote(newNote);
  }

  function editNote() {
    console.log("EDIT!!!!!!!");
    console.log(newNote);
  }

  return (
    <FormControl>
      <Input
        variant="outline"
        name="title"
        placeholder="Title"
        borderColor="rgb(29, 161, 242)"
        mt="4px"
        mb="16px"
        _hover={{
          borderColor: "rgb(29, 161, 242)",
          borderWidth: "2px"
        }}
        _placeholder={{
          color: "rgb(100, 100, 100)"
        }}
        value={ newNote.title }
        onChange={ handleInputChange }
      />
      <Textarea
        variant="outline"
        name="body"
        colorScheme="twitter"
        placeholder="Body"
        height="400px"
        maxH="500px"
        borderColor="rgb(29, 161, 242)"
        mb="16px"
        _hover={{
          borderColor: "rgb(29, 161, 242)",
          borderWidth: "2px"
        }}
        _placeholder={{
          color: "rgb(100, 100, 100)"
        }}
        value={ newNote.body }
        onChange={ handleInputChange }
      />
      <ButtonGroup display="flex" justifyContent="space-around">
        <Link to="/notes">
          <Button colorScheme="red">Cancel</Button>
        </Link>
        { ActionButton }
      </ButtonGroup>
    </FormControl>
  );
}

export default NoteForm;
