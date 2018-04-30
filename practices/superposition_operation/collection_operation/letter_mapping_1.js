'use strict';

function even_to_letter(collection) {
//在这里写入代码
//数字转字符函数 小写
function letter(n){
var r = String.fromCharCode(96 + parseInt(n));
return r ;
}
//正文
var result = new Array;
for(var i = 0 ; i < collection.length ; i++){
  if (collection[i] % 2 == 0  ){
    result.push(letter(collection[i]));
  }
}






return result
}

module.exports = even_to_letter;
