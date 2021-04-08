import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Note as NoteType, useNotesQuery, useAddNoteMutation } from '../generated/graphql';

export const NotesContext = createContext([]);

export const NotesProvider = (props: any) => {
  const { data } = useNotesQuery();
  
  return (
    <NotesContext.Provider value={ [ data?.notes || [] ] }>
      { props.children }
    </NotesContext.Provider>
  )
}