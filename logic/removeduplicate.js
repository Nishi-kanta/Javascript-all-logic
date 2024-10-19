function removeduplicate(arr) {
  const uniqueelement = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueelement.indexOf(arr[i]) === -1) {
      uniqueelement.push(arr[i]);
    }
  }
   return uniqueelement;
}

console.log(removeduplicate([1,2,3,4,4,5,6,6]))

// now i have to implement that concept using spread operator

 function removeduplicate1(arr)
 {
      return [...new Set(arr)]
 }
console.log(removeduplicate1([1,2,3,4,4,5,6,6]))
