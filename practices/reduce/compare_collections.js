'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
if(collection_a.length != collection_b.length)
return false
var a , b ;
var n=0;
for(a=b=0;a<collection_a.length;a++,b++)  
{
  if(collection_a[a]!=collection_b[b])
  return false
  else if(collection_a == collection_b[b])
  n=n+1;
}
if (n=collection_a.length)
return true
}

module.exports = compare_collections;


