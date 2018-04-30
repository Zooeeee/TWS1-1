'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
var collection = new Array;
var a, b ;
collection = collection_a;
for(b=0;b<collection_b.length;b++){
for(a=0;a<collection_a.length;a++)
{
  if (collection_a[a] ==collection_b[b])
  {break ; }
  else if (a == collection.length-1)
   collection.push(collection_b[b]);
}}

return collection





}

module.exports = get_union;

