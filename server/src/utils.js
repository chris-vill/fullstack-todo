export function getIndex(list, id) {
  return dummyNotes.reduce((acc, val, i) => {
    if (val.id === id) {
      acc = i;
    }

    return acc;
  }, null);
}
