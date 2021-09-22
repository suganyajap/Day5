//Convert all the strings to title caps in a string array
//IIFE function
(function()
{   
    var str="convert all string to title caps";
    
    console.log( str.
    split(" ").
    map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).
    join(" "));
})();