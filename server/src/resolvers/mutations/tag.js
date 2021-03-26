import { dummyTags } from '../../assets/dummy-data.js';
import { getIndex } from '../../utils.js';

const addTag = (_, args) => {
  const data = Object.assign({}, args);

  data.id = dummyTags.length + 1;
  dummyTags.push(data);

  return data;
}

const deleteTag = (_, args) => {
  const index = getIndex(dummyTags, args.id);
  const note = dummyTags.find(tag => tag.id === args.id);
  dummyTags.splice(index, 1);
}

export const tagMutations = {
  addTag,
  deleteTag
};