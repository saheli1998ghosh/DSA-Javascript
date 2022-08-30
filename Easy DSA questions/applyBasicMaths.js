//You are given an arrayAwithNelements. You are allowed toremove only one element, which makes thesum of all the remaining elements exactly divisible by 7.
//Your task is to find thefirst index of smallest elementthat can be removed from array. If there is no answer print-1.
//input-5
//14 7 8 2 4
//output-1
function applyBasicMaths(N,A){
    let sum=0;
    for(let i=0;i<N;i++){
        sum=sum+A[i];
    }
    let min=Infinity;
    let index=-1;
    for(let i=0;i<N;i++){
        let diff=sum-A[i]
     if(diff%7===0 && A[i]<min)  {
         min=A[i];
         index=i;
     }     
        
    }
    console.log(index);

} applyBasicMaths(5,[14,7,8,2,4])