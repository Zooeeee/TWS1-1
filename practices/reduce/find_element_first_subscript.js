'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
var i = 0 ;
for(i=0;i<collection.length;i++){
  if(collection[i] == element)
  break;
}

return i ;
}

module.exports = calculate_elements_sum;

