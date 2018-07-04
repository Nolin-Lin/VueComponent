
export const swapItems = (arr, index1, index2) => {
  const newArr = arr;
  newArr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
};

export const upRecord = (arr, $index) => { /* 上移 */
  if ($index === 0) {
    return;
  }
  swapItems(arr, $index, $index - 1);
};

// 下移
export const downRecord = (arr, $index) => {
  if ($index === arr.length - 1) {
    return;
  }
  swapItems(arr, $index, $index + 1);
};
