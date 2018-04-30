'use strict';
var rank_asc = function(collection){
  var result = new Array;
  result = collection.sort(function(x,y){
    return y-x;
  }


);
  return result;


};

module.exports = rank_asc;
