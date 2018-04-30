'use strict';

function median_to_letter(collection) {
//在这里写入代码
//数字转字符函数 小写
function letter(n){
  if(n<=26)
  var r = String.fromCharCode(96 + parseInt(n));
  else {
    var a , b ;
    a = parseInt(n/26);
    b = n % 26 ; 
    a = String.fromCharCode(96 + parseInt(a));
    b = String.fromCharCode(96 + parseInt(b));
    var r = a+b;
  }
  return r ;
  }
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
  r = parseInt(r)+1;
}
return r ;
}
//main
return letter(mid(collection));
}

module.exports = median_to_letter;
