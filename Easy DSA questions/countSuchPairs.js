//You are given an arrayAofNintegers along with a target integerK.
// Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target valueK.
// You are given an arrayAofNintegers along with a target integerK.
// Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target valueK.
//input-5 9
//3 0 6 2 7
//output-2
function countSuchPairs(N,K,A){
let count =0;
for(i=0; i<N;i++){
    for(j=i+1;j<N;j++){
        if(A[i]+A[j]==K){
            count++;
        }
    }
}
console.log(count);
}

countSuchPairs(5,9,[3,0,6,2,7]);