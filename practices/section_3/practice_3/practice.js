function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection = collection_a;
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
  
var item = new Array;
for(i = 0 ; i < object_b.value.length ; i++){
  item[i] =  object_b.value[i]
}  
for(a=0;a<element.length;a++){
  for (b=0;b<item.length;b++){
    if (element[a] == item[b])
    {
      var p = parseInt(count[a]/3);
      count[a] = count[a] - p ;
    }
  }
}

for(i=0;i<element.length;i++){
  result.push({key:element[i],count:count[i]}); 
}


return result
}

module.exports = create_updated_collection;
