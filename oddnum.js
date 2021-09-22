//print odd numbers using anonymous function
//array
var arr=[5,4,8,7,10];
//anonymous function
let fun=function(arr)
{   
    //Another array to store odd elements
    var arr1=[];
    for(var i=0;i<arr.length;i++)
    {   
        //checking whether an element is odd
        if(arr[i]%2!==0)
        {
            //if true push element to arr1
            arr1.push(arr[i]);
        }
    }
    return arr1;
};
//calling the function
console.log(fun(arr));