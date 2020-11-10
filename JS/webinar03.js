// const numbers = ;
// let smallestNumber = numbers[0];
const findSmallestNumber = function (items) {
    let smallestNumber = items[0];

    for (let i = 1; i < items.length; i += 1) {
       // console.log('numbers[i]: ', numbers[i]);
       // console.log('smallestNumber: ', smallestNumber[i]);
    
        if (items[i] < smallestNumber) {
            smallestNumber = items[i];
        }
    }
    
    return smallestNumber;
};

console.log(findSmallestNumber([67, 45, 3, 78, 90, 2]));