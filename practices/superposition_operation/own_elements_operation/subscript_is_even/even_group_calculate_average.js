'use strict';
var even_group_calculate_average = function(collection){
//平均数
function aver(n){
var sum = 0;
for(var i = 0 ; i < n.length ; i++)
{sum = sum + n[i];}
sum = sum / n.length;
return sum;}
//取第偶数个的元素
function even(n){
    var r = new Array;
    for(var i = 0 ; i < n.length ; i++)
    if (i % 2 == 1 && n[i]%2==0)
    r.push(collection[i]);
    return r ;
}
//分组函数
function divide(n){
var a = new Array;
var b = new Array;
var c = new Array;
for(var i = 0 ; i < n.length ; i++)
{
    if(n[i]>=0 && n[i]<10)
    a.push(n[i]);
    else if(n[i]>=10 && n[i]<100)
    b.push(n[i]);
    else
    c.push(n[i]);
}
return [a,b,c]
}
//判断是否有偶数
function judge(n){
var r  = new Array;
for(var i = 0 ; i < n.length ; i++){
    if (i % 2 != 0 )
    r.push(n[i]);
}
for(var i = 0 ; i < r.length ; i++)
if (r[i] % 2 == 0 )
return true
else 
return false}

//main
var a = judge(collection);
if (a == false)
return [0];
else 
{collection = even(collection);
collection = divide(collection);
if (collection[0]==""&&collection[1]=="")
{
    return [aver(collection[2])];
}
else {
    var result = new Array;
    for(var i = 0 ; i < 3 ;i++)
    {
        result.push(aver(collection[i]));
    }
    return result;
   
}



}

};
module.exports = even_group_calculate_average;
