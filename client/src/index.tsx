import './styles/reset.sass';
import './styles/main.sass';

import React from 'react';
import ReactDom from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
import { Center, ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NotesList } from './components';

/*
  TODO

  Grid Areas:
    side main main
    side main main
    side main main

  - Notes:
    - Create a note
      - in Notes View, click 'New Note' btn
    - View a note
      - in Notes View, click title
    - Edit a note
      - in Notes View, click 'Edit Note' btn
      - in Note View, click 'Edit Note' btn then return to Note View
    - Delete a note
      - in Notes View, click 'Delete Note' btn
      - in Note View, click 'Delete Note' btn then return to Notes View
  
  - Tags
    - Create a tag
      - in Edit Note View, if tag doesn't exist
      - in Tags View, click '+' btn
    - View a tag
      - No views for a tag, instead open Notes View with filter for the tag
      - Tags are displayed on the left side (Tags View)
    - Edit a tag
      - in Tags View, click 'Edit Tag' btn
    - Delete a tag
      - in Tags View, click 'Delete Tag' btn
*/

library.add(fab);
library.add(far);
library.add(fas);


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

ReactDom.render(
  <ApolloProvider client={ client }>
  <ChakraProvider>
    <Center h="100%" w="100%">
      <Grid
        minW="600px"
        maxW="1000px"
        minH="500px"
        maxH="800px"
        border="1px solid rgba(0,0,0,0.2)"
        borderRadius="6px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
      >
        <GridItem
          bg="tomato"
          py="12px"
          px="18px"
          borderLeftRadius="6px"
          rowSpan={2}
          colSpan={1}
        />
        <GridItem
          bg="papayawhip"
          py="12px"
          px="18px"
          borderRightRadius="6px"
          rowSpan={2}
          colSpan={3}
        >
          <NotesList/>
        </GridItem>
      </Grid>
    </Center>
  </ChakraProvider>
  </ApolloProvider>,
  document.getElementById('root')
);