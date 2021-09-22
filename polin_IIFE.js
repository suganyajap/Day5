//Return all the palindrome in an array
//IIFE function
(function()
{   
    var arr=[1,5,7,5,1];
     //initialize to true
     let isPalindrome = true;
     
     //loop through half length of the array
     for(let i = 0; i < arr.length / 2; i++) {

         //check if first half is equal to the second half
         if(arr[i] !== arr[arr.length - i - 1]){
           isPalindrome = false; 
           break;
         }
     }
     
     console.log(isPalindrome);

})();
