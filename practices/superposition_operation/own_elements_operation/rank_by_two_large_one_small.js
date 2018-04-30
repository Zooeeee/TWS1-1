'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  //升序
function up(n){
  return n.sort(function(x,y){return x-y;})
}
collection = up(collection);
for(var i = 0 ,j = 0 ; j< parseInt(collection.length/3) ; i=i+3 ,j++){
  var n ;
  n = collection[i];
  collection[i] = collection[i+1];
  collection[i+1] = collection[i+2];
  collection[i+2] = n ;
}
return collection;
}
module.exports = rank_by_two_large_one_small;
