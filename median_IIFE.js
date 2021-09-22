//Return median of two sorted arrays of same size
//IIFE
(function()
{
    var arr1 = [1, 12, 15, 26, 38];
    var arr2 = [2, 13, 17, 30, 45];
    var n=arr1.length;
    var i = 0; /* Current index of i/p array ar1[] */
    var j = 0; /* Current index of i/p array ar2[] */
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n; count++)
    {
        
        if (i == n)
        {
            m1 = m2;
            m2 = arr2[0];
            break;
        }
 
        
        else if (j == n)
        {
            m1 = m2;
            m2 = arr1[0];
            break;
        }
       
        if (arr1[i] <= arr2[j])
        {
            m1 = m2; 
            m2 = arr1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = arr2[j];
            j++;
        }
    }
 
    console.log((m1 + m2)/2);
})();
 
