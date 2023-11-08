const numbersArray = [23, 14, 6, 8, 10];
const newArray = getSubArray(numbersArray, 1, 3)
console.log(newArray);


function getSubArray(array,a,b) {
    let newArray=[];   
    for (let i = a; i <= b; i++) {
        const element = array[i];
        newArray.push(element)
    }
    return newArray;
}