function whitespace(str) {
  const result = str.replace(/\s/g, ""); // that regularexpression defines that spaces , tabs  and line breaks
  //g is for global search
  return result;
}

console.log("hello ");
console.log(whitespace("Nishi  kanta  sahoo"));
