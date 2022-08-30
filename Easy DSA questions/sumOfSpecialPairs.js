//You are given an arrayAofNintegers.
//Write a program to find thesumof the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.
//Input Format :
//First line contains N, size of array A.
//Second line contains N space separated integers which are elements of A
//Output one number, total number of pairs pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.
// input-6
// 1 2 3 5 7 12
//output-45
function sumOfSpecialPairs(N,A){
    let sum=0;
for(let i=0;i<N;i++){
    for(let j=i+1;j<N;j++){
     let a=checkPrime(j-i);
     if(a===true){
     sum=sum+Math.abs(A[i]-A[j]);
    }
}
}sumOfSpecialPairs(6,[1,2,3,5,7,12])
console.log(sum);
}
function checkPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}

