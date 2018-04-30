'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
var result = new Array;
if (number % interval == 0){
while(number > 0){
number = parseFloat(number.toFixed(1));
result.push(number);
number = number - interval;
}
result.push(0);
return result
}
else{
  while(number > (0-interval)){
  number = parseFloat(number.toFixed(1));
  result.push(number);
  number = number - interval;
  }
  return result

}





}

module.exports = spilt_to_zero;
