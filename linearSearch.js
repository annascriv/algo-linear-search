function linearSearch(searchTerm, arr) {
  //let newArr = arr.split('');
//console.log(newArr)
  for (i=0;i<arr.length;i++) {
    if (arr[i]===searchTerm) {
      return i
    } 
  } return undefined
}
console.log(linearSearch(5,[1,2,5,6]))
function globalLinearSearch(searchTerm, arr) {
  return [];
}

module.exports = { linearSearch, globalLinearSearch };
