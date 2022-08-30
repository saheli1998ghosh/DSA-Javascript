//You are given a number stored in a variable with the namenum
// Check if the number is a prime number or not
// if the value stored innum, is a prime number printYes, else printNo
// Note : A prime number is a number, that is divisible by only 1 and the number itself.
//input-13
//output-Yes
function identifyPrime(num) {
  let f=0;
for(i=0;i<=num;i++){
  if(num%i==0){
    f++;
  }
}
if(f==2){
  console.log("Yes");
}
else{
  console.log("No");
}
}identifyPrime(13)