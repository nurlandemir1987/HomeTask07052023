// 1. Reqemlerden ibaret arrayda duplicate reqemi qaytarin 
// (bir funksiya teyin edirik ve parameter kimi reqemlerden ibaret array qebul edir. 
// Arrayde yalniz bir eded duplicate olacaq) : 


let arr = [1, 2, 3, 8, 4, true, '7',7, 8];


function duclicateFind(arr) {
    for (let index = 0; index < arr.length-1; index++) {
        for (let index1 = index+1; index1 < arr.length; index1++) {
            if (arr[index] === arr[index1]) {
                return arr[index];
            }

        }

    }
    window.alert ('not same numbers');
    return false;
}
console.log(duclicateFind(arr));


// 2.  Arraydaki en boyuk reqemi qaytarin 
// (bir funksiya teyin edirik ve parameter kimi reqemlerden ibaret array qebul edir):


function arrBigNumber(array) {
    let bigNumber = array[0]
    for (let index = 0; index < array.length; index++) {
        if (bigNumber <array[index]) {
            bigNumber = array[index];
        }
        
    }
    return bigNumber;
}
console.log(arrBigNumber(arr));

// 3. Arrayin elementlerini 2ye vurub arrayi qaytarin 
// (bir funksiya teyin edirik ve parameter kimi reqemlerden ibaret array qebul edir):

function arrayHandler(number){
    for (let index = 0; index < number.length; index++) {
        number[index] *=2;
        
    }
    return number;
}
console.log(arrayHandler(arr));