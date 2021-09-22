//Return all the prime numbers in an array
//IIFE function
(function()
{   
    var arr=[7,11,5,8,10];
    var primeArr=[];
    var count=0;
    //finding prime numbers of an array using for loop 
    for(var i=0;i<arr.length;i++)
    {
        for(var j=1;j<=i;j++)
        {
            if(arr[i]%j===0)
            {
                count++;
            }
        }
        if(count<=2)
        {
            primeArr.push(arr[i]);
        }
    }
    //prime elements
    console.log(primeArr);
})();
