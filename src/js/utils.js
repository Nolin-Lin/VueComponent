/* 数组元素位置进行交换 */
/**
 * @method 数组里的两个相邻元素互换位置
 * @param {array} arr
 * @param {number} index1
 * @param {number} index2
 * @returns {array} 改变后的数组
 */
export const swapItems = (arr, index1, index2) => {
  const newArr = arr;
  /* 从 index2 开始 删除一个元素，并插入 arr[index1] */
  newArr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
};

/**
 * @method 把选择的元素，向前移动一位
 * @param {array} arr 要改变的数组
 * @param {number} $index 改变第几个元素
 */
export const upRecord = (arr, $index) => {
  if ($index === 0) {
    return;
  }
  swapItems(arr, $index, $index - 1);
};

/**
 * @method 把选择的元素，向后移动一位
 * @param {array} arr 要改变的数组
 * @param {number} $index 改变第几个元素
 */
export const downRecord = (arr, $index) => {
  if ($index === arr.length - 1) {
    return;
  }
  swapItems(arr, $index, $index + 1);
};

/**
 *
 * @method look-up代替if-else link：https://juejin.im/post/5b4b73e7f265da0f96287f0a
 * @param {number} grace
 * @param {array} level
 * @param {number} levelForGrace
 * @returns {string} 返回对应的元素
 * @example let graceForLevel=[700,650,600,550];
            let levelText=['信用极好','信用优秀','信用良好','信用中等','信用较差'];
            ifLookUp(696, graceForLevel, levelText);//信用优秀
 */
export const ifLookUp = (grace,level,levelForGrace) => {
  for(let i=0;i<level.length;i++){
    if(grace>=level[i]){
        return levelForGrace[i];
    }
  }
  //如果不存在，那么就是分数很低，返回最后一个
  return levelForGrace[levelForGrace.length-1];
}