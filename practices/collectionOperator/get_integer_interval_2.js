'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
 var collection = new Array; 
 var n = 0;

 if (number_a < number_b){
  for (var i = number_a;i<=number_b;i++)
  {
    if (i%2 == 0)
    {collection[n] = i ; n = n + 1 ;}
  }
}

else if(number_a > number_b){
  for(var i = number_a ; i>=number_b ; i--)
{
    if (i%2 == 0)
    {collection[n] = i ; n = n + 1 ;}
}
}

else if(number_a == number_b && number_a % 2 == 0)
{
  collection[n] = number_a;
}

else if(number_a == number_b && number_a % 2 != 0)
{
   ;
}
return collection;
}

module.exports = get_integer_interval_2;
