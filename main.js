 import { linearSearch, binarySearch } from './searching.js';
console.log(linearSearch);

const arr = [1, 2, 3, 4, 5];
const target = 3;
console.log(`The index of ${target} is:`, binarySearch(arr, target));