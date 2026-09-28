//lets we have linerar search algorithm
 function linearSearch(arr, target) { 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}   

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1; 
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;

        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

module.exports = {
    linearSearch,
    binarySearch
};//when expoerting multiple function we can use object to export the function
// and we can use destructuring to import the function in another file
