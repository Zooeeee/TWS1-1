'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var collection  = new Array;
  var n = 0;
  for(var b = 0 ; b < collection_b.length ; b++){
    for(var a = 0 ; a < collection_a.length ; a++)
    {
      if (collection_a[a] == collection_b[b])
      {
        collection.push(collection_a[a]);
      }
    }
  }
    return collection;
}

module.exports = get_intersection;
