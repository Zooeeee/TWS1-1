'use strict';
var number_map_to_word = function(collection){
  //定义一个字母数组
var letter = ['0','a','b','c','d','e','f','g','h','i',
'j','k','l','m','n','o','p','q','r','s',
't','u','v','w','x','y','z',]
  
//定义一个查找函数
function find(n){
  if (n<=26){
    return letter[n];
  }
  else if(n>26 && n<=52)
  {
    n = n - 26 ;
    var  i = find(n);
    i = "a"+i;
    return i ; }
}
//结果
var result = new Array;
for(var i = 0 ; i<collection.length;i++){
  result.push(find(collection[i]));
}

return  result;
};

module.exports = number_map_to_word;
