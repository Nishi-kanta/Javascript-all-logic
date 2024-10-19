
function checkvowels(arr)
{
        const vowels=["a","e","i","o","u"];
         let count=0;

         for(let data of arr.toLowerCase())
         {
               if(vowels.includes(data))
               {
                 count++
               }
         }
         return count;
}
 
console.log(checkvowels("nishikanta sahoo"))