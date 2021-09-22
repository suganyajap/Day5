//Sum of all numbers in an array
var arr=[10,30,12,45,5];
//anonymous function
let sum=function(arr)
{   
    var sum1=0;
    //adding all elements of an array using for loop 
    for(var i=0;i<arr.length;i++)
    {
        sum1+=parseInt(arr[i]);
    }
    //return sum of elements
    return sum1;
};
//calling the function
console.log(sum(arr));