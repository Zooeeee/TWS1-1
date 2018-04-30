'use strict';
var single_element = function(collection){
    var element = new Array;
    var count = new Array;
    var i ;
    var a = new Array;
    for(i=0;i<collection.length;i++){
        if (i%2!=0)
        a.push(collection[i]);}
    collection = a ;
    var n = collection[0];
    element[0] = n;
    for(i=0;i<collection.length;i++){
        if (collection[i] == n)
        {;}
        else {
            element.push(collection[i]);
            n = collection[i];} }
            collection = collection.sort();
    for(var a=0;a<element.length;a++){
        count[a] = 0;
        for (var b = 0 ; b <collection.length;b++)
        if (collection[b] == element[a]){
            count[a]++;
        }
    }
    var result = new Array;
    for(var i = 0 ; i < element.length;i++){
        if (count[i] == 1)
        result.push(element[i]);
    }


return result;
};
module.exports = single_element;
