'use strict';

function hybrid_operation_to_uneven(collection) {
//在这里写入代码
var i ;
var item = new Array;
for(i=0;i<collection.length;i++){
  if(collection[i]%2!=0)
  item.push(collection[i]);
}

collection = item;
for(i = 0 ; i < collection.length ; i++){
if(collection[i] % 2 == 1){
  collection[i] = collection[i]*3+2;
}
else {
 ;
}
}
return collection;




}

module.exports = hybrid_operation_to_uneven;

