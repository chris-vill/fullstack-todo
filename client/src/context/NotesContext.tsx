import React, { useState, createContext } from 'react';
import { useNotesQuery, useAddNoteMutation } from '../generated/graphql';

export const NotesContext = createContext([]);

export const NotesProvider = (props: any) => {
  const { data, loading } = useNotesQuery();
  const [ addNote ] = useAddNoteMutation();
  const notes = data?.notes;
  
  return (
    <NotesContext.Provider value={ [ notes, addNote ] }>
      { props.children }
    </NotesContext.Provider>
  )
}