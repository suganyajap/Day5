//Rotate an array by k times
//anonymous function
var rotate=function(a, n, k)
{
 
    
    //If rotation is greater than size of array
    k = k % n;
 
    for (let i = 0; i < n; i++) {
        if (i < k) {
 
            // Printing rightmost  kth elements
            
            console.log(a[n + i - k] + " ");
        }
        else {
 
            
            // Prints array after 'k' elements
            console.log((a[i - k]) + " ");
        }
    }
    
};
 

let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
 
rotate(Array, N, K);