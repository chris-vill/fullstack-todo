import './styles/reset.sass';
import './styles/main.sass';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';
import { Center, ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { NotesList, NoteDetails } from './components';
import { NotesProvider } from './context/NotesContext';

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

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    addTypename: false
  })
});

ReactDom.render(
  <ApolloProvider client={ client }>
  <ChakraProvider>
  <NotesProvider>
  <Router>
    <Center h="100%" w="100%">
      <Grid
        w="650px"
        h="600px"
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
          maxW=""
        />
        <GridItem
          bg="papayawhip"
          py="12px"
          px="18px"
          borderRightRadius="6px"
          rowSpan={2}
          colSpan={3}
        >
          <Switch>
            <Route path="/" exact component={ NotesList }/>
            <Route path="/notes" exact component={ NotesList }/>
            <Route path="/note/:id" exact component={ NoteDetails }/>
          </Switch>
        </GridItem>
      </Grid>
    </Center>
  </Router>
  </NotesProvider>
  </ChakraProvider>
  </ApolloProvider>,
  document.getElementById('root')
);