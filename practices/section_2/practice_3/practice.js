function count_same_elements(collection) {
  //在这里写入代码
  //将有重合的展开 形成一个数组
var collection_a = new Array ; 
var str ;
for(i=0;i<collection.length;i++){
str = collection[i];
  if (str.length == 1 )
collection_a.push(str[0]);
  else if(str.length == 3 || str.length == 4 )
{
var n = parseInt(str[2]);
for(var a  = 1 ; a <= n ; a++ ){
collection_a.push(str[0]);}
}

else if (str.length == 5 ){
  var n = str[2] + str[3];
  n = parseInt(n);
  for(var a  = 1 ; a <= n ; a++ ){
    collection_a.push(str[0]);}
}
}


collection = collection_a;


//分类 计数
var result = new Array;
var i , value ,n;
n = 0 ;
var element = new Array;
var count = new Array;
value = collection[0];
count[0] = 0;
element[0] = collection[0];
for (i = 0 ; i < collection.length ; i ++){
  if (collection[i] == value){
    count[n] = count[n] + 1 ; 
}
  else if (collection[i] != value){
    value = collection[i];
    n = n + 1 ;
    count[n] = 1 ; 
    element[n] = collection[i];
  }
}
for(i=0;i<element.length;i++){
result.push({name:element[i],summary:count[i]}); 
}


return result
}

module.exports = count_same_elements;
