function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = new Array;
  var a , b ;
  for(a=0;a<collection_a.length;a++){
    for(b=0;b<collection_b[0].length;b++){
      if (collection_a[a] == collection_b[0][b])
      {
        result.push(collection_a[a]);
        break;
      }
  }
  }
  return result

}

module.exports = collect_same_elements;
