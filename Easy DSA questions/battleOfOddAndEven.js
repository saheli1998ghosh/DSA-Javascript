// You are given an arrayarrofNintegers.
// You need to printOdd, if thesum of all odd numberspresent in the array is greater thansum of all the even numberspresent in the array, or else printEven.
//Input Format :
// First line contains N which is the number of elements present in the array.
// Second line contains N space separated integers which are the elements of array.
//input-4
//1 2 3 4
//output-Even
function battleOfOddAndEven(n, arr){
    let sumEven=0;
  let sumOdd=0;
  for(i=0;i<n;i++){
      if(arr[i]%2==0){
          sumEven=sumEven+arr[i];
          
      }else{
          sumOdd=sumOdd+arr[i];
      }
  }
  if(sumOdd>sumEven){
      console.log("Odd");
  }else{
      console.log("Even");
  }
} battleOfOddAndEven(4, [1,2,3,4])