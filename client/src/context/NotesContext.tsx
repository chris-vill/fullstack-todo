import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Note as NoteType, useNotesQuery, useAddNoteMutation } from '../generated/graphql';

export const NotesContext = createContext([]);

export const NotesProvider = (props: any) => {
  const { data } = useNotesQuery();
  const [ addNote ] = useAddNoteMutation();
  const [ notes, setNotes ] = useState(data?.notes || []);
  const history = useHistory();

  // cheating with any
  function _addNote(variables: any) {
    addNote({ variables });
    setNotes((prevState: NoteType[]) => {
      console.log("ADD NOTE");
      console.log(prevState);
      console.log(variables);

      return [
        ...prevState,
        { ...variables }
      ];
    })
    history.push('/notes');
  }
  
  return (
    <NotesContext.Provider value={ [ notes, _addNote ] }>
      { props.children }
    </NotesContext.Provider>
  )
}