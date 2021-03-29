import React, { useState, createContext } from 'react';
import { useNotesQuery } from '../generated/graphql';

export const NotesContext = createContext([]);

export const NotesProvider = (props: any) => {
  const { data, loading } = useNotesQuery();
  const notes = data?.notes;
  
  return (
    <NotesContext.Provider value={ notes }>
      { props.children }
    </NotesContext.Provider>
  )
}