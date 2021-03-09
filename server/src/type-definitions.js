import ApolloServerExpress from 'apollo-server-express';

const { gql } = ApolloServerExpress;

export const typeDefs = gql`
  type Note {
    id: Int!
    title: String
    body: String
    tags: [ Tag ]
  }

  type Tag {
    id: Int!
    name: String!
    notes: [ Note ]
  }

  type Query {
    note(id: Int): Note
    notes: [ Note ]
    tag(id: Int): Tag
    tags: [ Tag ]
  }
`;
