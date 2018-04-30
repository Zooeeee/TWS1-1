'use strict';
var even_asc_odd_desc = function(collection){
//取偶数函数
function even(n){
    var result = new Array;
    for(var i = 0 ; i < n.length ; i ++){
        if (n[i]%2==0)
        result.push(n[i]);
    }
    return result;
}
//取奇数
function not_even(n){
    var result = new Array;
    for(var i = 0 ; i < n.length ; i ++){
        if (n[i]%2==1)
        result.push(n[i]);
    }
    return result;
}
//排序 升序
function up(n){
    n = n.sort(function(x,y){return x-y;})
    return n ;
}
//排序 降序
function down(n){
    n = n.sort(function(x,y){return y-x;})
    return n;
}

//main 
var a = even(collection);
var b = not_even(collection);
a = up(a);
b = down(b);
for(var i = 0 ; i < b.length ; i++){
    a.push(b[i]);
}
return  a;






};
module.exports = even_asc_odd_desc;
