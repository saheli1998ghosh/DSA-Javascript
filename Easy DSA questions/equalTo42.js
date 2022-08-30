// You are given an array of N integers. You need to printYesif 42 is present in array, else printNo.
// Output "Yes" or "No" based on condition mentioned above.
//input-5
//37098
// output-No
function equalTo42(size,arr) {
    for (let i=0;i<size;i++){
        if(arr[i]==42){
            console.log("Yes");
         break;
        }
        else{
            console.log("No");
            break;
        }
    }
}
equalTo42(5,[3,7,0,9,8]);