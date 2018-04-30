function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  //存放数据到元素数组与数量数组  还有目的数组
var element = new Array;
var count = new Array;
var item= new Array;
var i,a,b;
for(i=0;i<collection_a.length;i++,a++,b++)
{
  element[i] = collection_a[i].key;
  count[i] = collection_a[i].count;
}
for(i=0;i<object_b.value.length;i++){
  item[i] = object_b.value[i];
}

for(i=0;i<element.length;i++){
  for(n=0;n<item.length;n++){
    if(item[n] == element[i]){
      count[i] = count[i]-1;
    }
}
}
var result = new Array;
for(i=0;i<element.length;i++){
  result.push({key:element[i],count:count[i]})
}





return result
}

module.exports = create_updated_collection;
