//Rotate an array by k times
//IIFE function
(function()
{
    let a = [1, 2, 3, 4, 5];
    let n = a.length;
    let k = 2;
    
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
    
})();
 