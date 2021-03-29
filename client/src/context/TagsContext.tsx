import React, { useState, createContext } from 'react';
import { useTagsQuery } from '../generated/graphql';

export const TagsContext = createContext([]);

export const TagsProvider = (props: any) => {
  const { data, loading } = useTagsQuery();
  const tags = data?.tags;
  
  return (
    <TagsContext.Provider value={ tags }>
      { props.children }
    </TagsContext.Provider>
  )
}