// You are given an integernum.
// You need to printYesif that integer is a palindrome or else printNo.
// A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward,such asmadamorracecar.
//input-1221
//output-Yes

function detectPalindrome(num){
for(i=0;i<=num.length-1;i++){
    if(num[i]==num[num.length-1-i]){
        console.log("Yes");
        return;
    }
}
  console.log("No");
    
}detectPalindrome(1221)
