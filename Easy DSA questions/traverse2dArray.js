// You are given a 2D array(matrix), ofNrows andMcolumns.
// You need to print elements of array as shown in the diagram, on a single line.
// input-4 3
// 1 8 9
// 2 7 10
// 3 6 11
// 4 5 12
// output-4 3 2 1 5 6 7 8 12 11 10 9
function traverse2dArray(N, M, matrix){
    let bag=0
    let sum=0;
   for(let i=0;i<M;i++){
        for(let j=N-1;j>=0;j--){
            
          bag+=matrix[j][i]+sum;
            
       }
   }
   console.log(bag);
  
}
traverse2dArray(4, 3, [1,8,9,2,7,10,3,6,11,4,5,12]);