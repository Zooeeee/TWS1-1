'use strict';
var rank_desc = function(collection){
  var result = new Array;
  result = collection.sort(function(x,y){
    return x-y;
  }


);
  return result;
};

module.exports = rank_desc;
