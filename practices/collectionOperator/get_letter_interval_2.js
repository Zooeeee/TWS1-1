'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var letter=['0','a','b','c','d','e','f','g',
  'h','i','j','k','l','m','n',
  'o','p','q','r','s','t',
  'u','v','w','x','y','z','a','b','c','d','e','f','g',
  'h','i','j','k','l','m','n',
  'o','p','q','r','s','t',
  'u','v','w','x','y','z','ba']
  var i =0;
  var collection = new Array;
  for (i = 27 ; i <= 52; i++)
  letter[i] = 'a' + letter[i];
  if (number_a<number_b)
  {
    for (i = number_a;i<=number_b;i++)
    collection.push(letter[i]);
  }
  else if (number_a > number_b)
  {
    for(i = number_a;i>=number_b;i--)
    collection.push(letter[i]);
  }
  else if (number_a==number_b)
  collection.push(letter[number_a]);

  return collection;
  }

module.exports = get_letter_interval_2;

