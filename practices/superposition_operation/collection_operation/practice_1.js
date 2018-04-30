'use strict';

function hybrid_operation(collection) {
//在这里写入代码
var sum , i ;
sum = i = 0 ;
for(i = 0 ; i < collection.length ; i++){
  sum = sum + (collection[i]*3+2);
}
return sum;


}

module.exports = hybrid_operation;

