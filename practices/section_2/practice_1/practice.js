function count_same_elements(collection) {
  //在这里写入代码
var result = new Array;
var i , value ,n;
n = 0 ;
var element = new Array;
var count = new Array;
value = collection[0];
count[0] = 0
element[0] = collection[0]
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
  result.push({key:element[i],count:count[i]}); 
}
return result 
}

module.exports = count_same_elements;
