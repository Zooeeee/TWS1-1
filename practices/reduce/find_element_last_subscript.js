'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
var i = 0 ;
for(i = collection.length-1;i>=0;i--){
  if(collection[i] == element)
  break;
}
return i;


}

module.exports = calculate_elements_sum;
