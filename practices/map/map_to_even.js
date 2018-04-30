'use strict';
function map_to_even(collection){
var i = 0 ;
var result = new Array;
for(i=0;i<collection.length;i++){
  result.push(collection[i]*2);
}




  return result;
}
module.exports = map_to_even;
