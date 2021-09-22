//Convert all the strings to title caps in a string array
var str="convert all string to title caps";
//anonymous function
let fun=function(str)
{   
    
    return str.
    split(" ").
    map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).
    join(" ");
};
//calling the function
console.log(fun(str));