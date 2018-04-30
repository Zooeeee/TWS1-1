'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var i = 0 ;
  for(i = collection.length-1 ; i >= 0 ; i-- )
  if (collection[i] % 2 == 0 )
  break;
  return collection[i]


}

module.exports = find_last_even;
