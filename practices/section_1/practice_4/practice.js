function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = new Array;
  var a , b ;
  for(a=0;a<collection_a.length;a++){
    for(b=0;b<object_b.value.length;b++){
      if (collection_a[a].key == object_b.value[b])
      {
        result.push(collection_a[a].key);
        break;
      }
  }
  }
  return result





}

module.exports = collect_same_elements;
