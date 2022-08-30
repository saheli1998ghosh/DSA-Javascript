//Given an array,arrwhich hasNintegers.
// You need to print the smallest and largest element present in the array each on new lines.
// Input Format
// The first line contains an integerN.
// The second line containsNspace separated integers, which are integers of arrayarr.
// Output Format
// One first line, print minimum of all elements.
// On the second line, print the maximum of all elements.
//input-4
// (-2,0,8,4)

function smallestAndLargestOfAll(n, arr)
{
var largest = arr[0];
var smallest = arr[0];

for (let i = 1; i < n; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  } else if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
  console.log(smallest);
  console.log(largest);
}smallestAndLargestOfAll(4,[-2,0,8,4])