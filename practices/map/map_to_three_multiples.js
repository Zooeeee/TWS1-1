'use strict';
var map_to_three_multiples = function(collections){
  var i = 0 ;
var result = new Array;
for(i=0;i<collections.length;i++){
  result.push(collections[i]*3);
}




  return result;
};

module.exports = map_to_three_multiples;
