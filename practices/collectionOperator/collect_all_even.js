'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var a = new Array;
  var n = 0;
  for(var i = 0;i < collection.length;i++)
  {
    if (collection[i] % 2 == 0)
    {
      a[n] = collection[i];
      n = n+1;
    }
  }
  return a ;
}
module.exports = collect_all_even;
