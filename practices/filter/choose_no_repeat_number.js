'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
var n = new Array;
n[0] = collection[0];
for(var i = 1 ; i < collection.length ; i++)
{
  if (collection[i] != collection[i-1])
  n.push(collection[i]);
}
return n 
}

module.exports = choose_no_repeat_number;
