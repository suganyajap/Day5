//Remove duplicates from an array
//using IIFE
(function () {
    var arr=['a','b','c','a','d','d'];
    var seen = {};
    var out = [];
    var len = arr.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = arr[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    console.log(out);
})();