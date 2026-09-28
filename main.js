const {linearSearch,binarySearch} = require('./searching');//de-structuring the function from the module
console.log(linearSearch);

const arr = [1, 2, 3, 4, 5];
const target = 3;
console.log(`The index of ${target} is:`, binarySearch(arr, target));