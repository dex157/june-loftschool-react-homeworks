export const sortOrderFn = (a, b) => b.createdAt - a.createdAt;

export const removeItemFromArray = (array, index) => {
  const length = array.length;

  if (index === 0) {
    array = array.slice(1);
  } else if (index === length - 1) {
    array = array.slice(0, length - 1);
  } else {
    array = [...array.slice(0, index), ...array.slice(index + 1)];
  }
  return array;
};
