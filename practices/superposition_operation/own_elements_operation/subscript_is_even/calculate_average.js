'use strict';
var calculate_average = function(collection){
var sum , n;
sum = n = 0;
for(var i = 0 ; i < collection.length ; i++){
    if(i % 2 != 0){
        sum = sum + collection[i];
        n ++;
    }
}
sum = sum / n ;
return sum ;
};
module.exports = calculate_average;
