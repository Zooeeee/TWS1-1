'use strict';

function average_to_letter(collection) {
//在这里写入代码
//数字转字符函数 小写
function letter(n){
  var r = String.fromCharCode(96 + parseInt(n));
  return r ;
  }
//正文

var sum = 0;
for(var i = 0 ; i < collection.length ; i++){
  sum = sum +collection[i];
}
sum = sum / collection.length;
sum = Math.ceil(sum);
sum = letter(sum);

return sum
}

module.exports = average_to_letter;

