const sentense = "i love coding in javascript";

let longsentence = "";
let sentenceinarry = sentense.split(" ");
for (let i = 0; i < sentenceinarry.length; i++) {
  if (sentenceinarry[i].length > longsentence.length) {
    longsentence = sentenceinarry[i];
  } 
}
console.log(longsentence);


// here we have use also for of loop 
// like 
//  for (let word of sentenceinarry)
//  {
//        if(word.length>longsentence.length)
//        {
//          longsentence=word
//        }
//  }




