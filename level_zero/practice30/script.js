// Build a function, random_range, that takes 2 parameters, start_num and end_num.  OPTIONALLY: If start_num is an array instead (and end_num isn't specified), then it returns a random element from the array

// - 
// - Example:
// 	- random_range(2,15)
// 		- returns 7
// 	- random_range(1,100)
// 		- returns 85
// 	- random_range(['a','b','c','d','e'])
// 		- returns 'b'

const random_range = function(start_num, end_num) {
    var dataObj = {};
    var result;
    if(arguments.length === 1){
        dataObj.upperLimit = start_num.length;
        dataObj.hasArr = true;
        dataObj.baseline = 0;
    } else {
        dataObj.upperLimit = end_num;
        dataObj.hasArr = false;
        dataObj.baseline = start_num;
    }
    var rndmFloat = Math.random() * dataObj.upperLimit
    result = Math.floor(rndmFloat + dataObj.baseline);
    if(dataObj.hasArr){
        return start_num[result];
    }
    return result;
}

var test1 = random_range(2,15),
    test2 = random_range(1,100),
    test3 = random_range(['a','b','c','d','e']);

console.log("first test", test1);
console.log("second test", test2);
console.log("third test", test3);
