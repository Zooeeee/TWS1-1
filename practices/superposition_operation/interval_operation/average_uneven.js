'use strict';

function average_uneven(collection) {
//在这里写入代码
var sum = 0 ;
var n = 0;
for(var i = 0 ; i < collection.length ; i++){
if(collection[i] % 2 == 1 ){
  sum  = sum + collection[i];
  n = n + 1 ;
}
}
sum = sum / n ;


return sum;



}

module.exports = average_uneven;
