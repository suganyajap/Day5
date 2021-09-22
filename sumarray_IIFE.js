//Sum of all numbers in an array
//IIFE function
(function()
{   
    var arr=[10,30,12,45,5];
    var sum1=0;
    //adding all elements of an array using for loop 
    for(var i=0;i<arr.length;i++)
    {
        sum1+=parseInt(arr[i]);
    }
    //display sum of elements
    console.log(sum1);
})();
