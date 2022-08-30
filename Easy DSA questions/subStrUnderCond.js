//You are given a strings, you have to find thecountof all such substrings which start and ends with the same character.
//Print the count of total number of such substrings starting and ending with same characters.
//input-abcab
//output-7
function subStrUnderCond(s){
 let count = 0;
    
    for(i = 0; i <s.length; i++){
        let bag="";
    for(j = i; j <s.length; j++){
        bag+=s[j];
    if (bag[0] == bag[bag.length-1]){
                count++; 
            }
        }
    }
    console.log(count);
}subStrUnderCond(abcab)
  