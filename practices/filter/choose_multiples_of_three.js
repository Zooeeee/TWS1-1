'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
var n = new Array;
for(var i = 0 ; i < collection.length;i++)
{
  if(collection[i]%3==0)
  n.push(collection[i]);
}
return n 
}

module.exports = choose_multiples_of_three;
