//------------------------------------Task 1----------------------------------
//--------Option 1----- Single function
function processData ( num1 = 0, num2 = 0, action = "sum") {   // default parameters 0+0 ---> "0"
    switch (action) {
        case ("sum"):
            console.log (num1 + num2);
            break;
        case ("product"):
            console.log (num1 * num2);
            break;
        case ("square"):
            console.log (num1 ** num2);
            break;
        default:
            console.log ("Incorrect action") // added in case user enters wrong arguments (simple error handling for 'switch case' construction)

    }
    return; //added here just to end the function (not really needed)
}
//let's check the function
processData();  // 0
processData(3,10, "sum");  // 13
processData(3,10, "product"); // 30
processData(3,10, "square");  // 59049
processData(3,0, "sum");  //  3
processData(0,10, "product");  // 0
processData(-3,10, "sum");  // 7
processData(3,10, "divide");  // "Incorrect action"
processData(0,0, "square");  // 1

//--------Option 2: function calling fuctions plus arrow functions

const sum = (num1 , num2) => num1 + num2;
const product = (num1 , num2) => num1 * num2;
const square = (num1 , num2) => num1 ** num2;
function _processData (num1 = 0, num2 = 0, func = sum){
    let result = func (num1, num2);
    console.log (result)
}
//let's check the function
_processData();  // 0
_processData(3,10, sum);  // 13
_processData(3,10, product); // 30
_processData(3,10, square);  // 59049
_processData(3,0, sum);  //  3
_processData(0,10, product);  // 0
_processData(-3,10, sum);  // 7
_processData(0,0, square);  // 1


//-----------------------------Task 2----------------------------------

const arr = [2, 4, 10, 26, 'true', 'False', 17, 2, 'bravo', 'Charly', 'Viktor'];
function findElem ( arr, el ){
    let result = arr.includes ( el ); 
    console.log (result);
}

findElem (arr, 4);  // true
findElem (arr, true);  // false
findElem (arr, 'True');  //false
findElem (arr, 'true');  // true


//------------------------Task 3----------------------------------------

const arr1 = [2, 4, 10, 26, 'true', 'False', 17, 2, 'bravo', 'Charly', 'Viktor'];
function deleteItem (arr1, item){
    let arr2 = arr1.filter (element => element !== item);  //.filter method uses callback function that compares all arr1 elements with 'item'
    console.log (arr2);                                    //If function returns 'True' -> element is included to arr2
}
deleteItem(arr1, 2); // 4, 10, 26, 'true', 'False', 17, 'bravo', 'Charly', 'Viktor'


//------------------------Task 4---------------------------------------


const pi = Math.PI;  // declaring th Pi number
const getCircleLength = (r) => console.log ( 2 * pi * r); // declaring a function to calculate circle length itself
function customError1 (r) {
    if (r <= 0) {
    throw new Error ('Radius cannot be equal or less than 0. Please enter a valid positive value'); // error for invalid nimeric values
    }
}
function customError2 (r) {
    if (isNaN(r)) {
    throw new Error ('Incorrect radius - please, enter a positive  numeric value!'); // error for non numeric data types
    }
}
try {
    let r = 3; // test with different values like [5, 0, -1, "1", a, "six", etc.]
    customError1(r);
    customError2(r);
    getCircleLength(r);
    }
catch (error) {           // to test this block comment customError1 and customError2 (lines 92-93). Otherwise exceptions will be handled by custom error handlers.
console.log (error.name);     // there will be no exception for r <= 0, so at least customError1 will handle some logical error
console.log (error.message);  // I didn't add stack as it's not informative at this stage of our learning course
}

//------------------------------Task 5------------------------------
//----------------Option1: use lopp to notify user about invalid input
function checkID () {
    let _id
    while (true) { //we use loop to reinitiate prompt in case of error
    _id = prompt ('Enter your ID (from 1 to 1000):', '');
    
    if (_id === null || _id === '') {
        alert ('ID is empty. Please enter a valid ID!'); // null check
        continue;
    }
    _id = Number (_id); // this added after null check becuse it didn't work with number data type
    if (_id <= 0 || _id > 1000) {
        alert ('ID value is out of valid range (1 - 1000)!'); // number range check
        continue;
    }
    if (isNaN(_id)) {
        alert ('Provided value is not a number. Please enter a valid ID!'); // wrong data type check
        continue;
    }
    break;
    }
    return _id;

}

try {
    let result = checkID ();
    alert ('Your ID is: ' + result);
} catch (exception) {  // in case we use loop, the catch block will not be executed
    console.log (exception.name);
    console.log (exception.message);
}

//--------------Option 2: throw errors to console but function will stop in case of error (catch bloc will be executed)

function checkID () {
    let _id = prompt ('Enter your ID (from 1 to 1000):', '');
    
    if (_id === null || _id === '') {
        throw new Error ('ID is empty. Please enter a valid ID!'); // null check
    
    }
    _id = Number (_id); // this added after null check becuse it didn't work with number data type
    if (_id <= 0 || _id > 1000) {
        throw new Error ('ID value is out of valid range (1 - 1000)!'); // number range check

    }
    if (isNaN(_id)) {
        throw new Error ('Provided value is not a number. Please enter a valid ID!'); // wrong data type check

    }

    return _id;

}

try {
    let result = checkID ();
    alert ('Your ID is: ' + result);
} catch (exception) { 
    console.log (exception.name);
    console.log (exception.message);
}


//----------------- Task 6 --------------------------

const _arr1 = [1, 3, 5, 7, 9, 11, 12, 13, 14, 15];
const _arr2 = [2, 4, 6, 8, 10, 11, 12, 13, 14, 15];
function findArrDiff (_arr1, _arr2) {
    const uniqueElArr1 = _arr1.filter(item => !_arr2.includes(item)); //filter method findes unique elements in _arr1
    const uniqueElArr2 = _arr2.filter(item => !_arr1.includes(item)); //filter method findes unique elements in _arr2
    const result = uniqueElArr1.concat(uniqueElArr2); // concat method creates new array (add unique values from _arr2 to _arr1)
    return result.map(item => item.toString()); // in case we want array of strings in console as it stated in the task
}
const difference = findArrDiff (_arr1, _arr2)
//findArrDiff(_arr1, _arr2);    <-----we don't need to call the function separately, as it is called in next line
console.log (difference); // ['1', '3', '5', '7', '9', '2', '4', '6', '8', '10']
// Example usage: 
// const array1 = [1, 2, 3, 4]; const array2 = [3, 4, 5, 6]; const result = compareArrays(array1, array2); console.log(result); // Output: [1, 2, 5, 6]