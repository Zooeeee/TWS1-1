'use strict';
var calculate_median = function(collection){
//写代码
//取中位数
function mid(n){
    var r = 0 ;
    if(n.length % 2 != 0 ){
      r = n[(n.length-1)/2];
    }
    else {
      var a = n.length/2;
      var b = n.length/2 - 1;
      r = (n[a]+n[b])/2;
    }
    return r ;}

//取出第偶数个元素
function trans(n){
var r = new Array;
for (var i = 0 ; i < n.length ; i++){
    if (i % 2 != 0)
    r.push(n[i]);
}
return r ;
}

return mid(trans(collection));

};
module.exports = calculate_median;
