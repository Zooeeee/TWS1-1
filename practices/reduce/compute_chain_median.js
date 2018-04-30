'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  //排序算法
  function sortnumber(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
  for (var j = 0; j < len - 1 - i; j++) {
    if (arr[j] > arr[j+1]) { //相邻元素两两对比
    var temp = arr[j+1]; //元素交换
    arr[j+1] = arr[j];
    arr[j] = temp;
    　　　　　　}
    　　　　}
    　　}
    　　return arr;
    }
  collection = collection.replace(/->/g,",");
  collection = collection.split(","); 
  for(var i = 0 ; i<collection.length;i++)
  collection[i] = parseInt(collection[i]);
  collection = sortnumber(collection);
  //转化成为数组
  var x ;
  if(collection.length % 2 == 0 )  // 数组长度为偶数
  { x = parseInt((collection.length-1)/2);
    x = (collection[x]+collection[x+1])/2
   }

   else if(collection.length % 2 == 1 )//数组长度为奇数
   {
     x = (collection.length-1)/2;
     x = collection[x];
   }
  return  x;
}

module.exports = compute_chain_median;
