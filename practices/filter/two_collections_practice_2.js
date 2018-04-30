'use strict';

function choose_no_common_elements(collection_a, collection_b) {
//在这里写入代码
var collection = new Array;
var a , b ;
for(a = 0 ; a < collection_a.length ; a++){
for(b = 0 ; b < collection_b.length; b++){
if (collection_a[a] == collection_b[b])
{break;}

else if (b == collection_b.length-1)
collection.push(collection_a[a]);
}


}
return collection
}
module.exports = choose_no_common_elements;
