'use strict';

function double_to_one(collection) {
 //在这里写入代码
var result = new Array;
result = collection[0];
collection = collection.concat.apply([],collection);
var a , b ;
for(a = 0 ; a<collection.length;a++){
for(b = 0 ; b<result.length;b++){
  if (collection[a] == result[b])
  break;
  else if (b == result.length-1)
  result.push(collection[a]);
}

}




return result
}

module.exports = double_to_one;
