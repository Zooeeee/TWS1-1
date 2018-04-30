'use strict';
var is_exist_element = function(collection,element){
var n = new Array;
for(var i = 0 ; i < collection.length ; i++){
    if (i % 2 == 0)
    n.push(collection[i]);
}
for (var i = 0 ; i < n.length ; i++)
{
    if(n[i] == element)
    return true;
    else if (i == n.length-1 && n[i] != element)
    return false;
}





};
module.exports = is_exist_element;
