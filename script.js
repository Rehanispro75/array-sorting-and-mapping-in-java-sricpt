


var a = 10;
var b = 10;
var c = 10;
var d = 5;

document.write(eval("a+b"));


var array =[2,3,4,5,6,7,8,9,0];

function function_array(x) {
return x+5*2

}


var newArray =array.map(function_array);

document.write("new array:"+newArray);
var points =[1,2,3,45,6,7,8,];
document.getElementById("para1").innerHTML = points;


function ascending() {
points.sort(function(a,b){return a - b});
document.getElementById("para1").innerHTML = points;
}

function descending(){
 points.sort(function(a,b){return b - a});
 document.getElementById("para1").innerHTML = points; 
}