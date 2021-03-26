import { dummyTags } from '../../assets/dummy-data.js';

const tag = (_, { id }) =>
  dummyTags.find(tag => tag.id === id)

const tags = () =>
  dummyTags

export const tagQueries = {
  tag,
  tags
}


