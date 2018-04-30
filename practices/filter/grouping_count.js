'use strict';

function grouping_count(collection) {

  //在这里写入代码
  collection = collection.sort();
  //去重
   var n = new Array;
   n[0] = collection[0];
   for(var i = 1 ; i < collection.length ; i++){
    if (collection[i] != collection[i-1])
    n.push(collection[i]);
}
  //计数
  var count = new Array(n.length);
  for(var j = 0 ; j < n.length;j++){
    count[j] = 0 ;
  for(var i = 0 ; i < collection.length;i++) {
    if(collection[i] == n[j])
    {count[j] ++;}
  }
}
//添加进对象
var result = {};
for(var i = 0 ;i<count.length;i++)
{
  result[n[i]] = count[i];
}


  return result
}

module.exports = grouping_count;
