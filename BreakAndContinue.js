let arr = [1,2,5,3,4,2,311];
for (let index = 0; index < arr.length; index++) {
    if(index == 2){
        // break; // breaks the loop
        continue; // skips the 2nd iteration
    }
    console.log(arr[index]);
}