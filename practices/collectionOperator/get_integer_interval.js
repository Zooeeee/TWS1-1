'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
var collection = new Array;
var i = 0 ;
if (number_a < number_b)
{
  for(var n = number_a ; n <= number_b ; n++)
  {collection[i] = n ; i = i + 1 ;}
}

else if (number_a > number_b){
for(var n = number_a ; n >= number_b ; n--)
  {collection[i] = n ; i = i + 1 ;}
}

else if (number_a == number_b)
collection[i] = number_a ;

return collection;

}

module.exports = get_integer_interval;

