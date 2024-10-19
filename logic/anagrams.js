// here check some word comes under some letter like 
// listen , silent 
// anagram is a word formed by arranging the letters of another word

function areAnagrams(str1,str2)
{
       const sortedstr1=str1.split('').sort().join('');
       const sortedstr2=str2.split('').sort().join('');

        return sortedstr1==sortedstr2;
}
console.log(areAnagrams("listen","silent"));

