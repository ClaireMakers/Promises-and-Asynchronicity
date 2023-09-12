// Object that we use to handle asynchronous operations. 
//Promises have three different states: 
// - pending => waiting for it to be fulfilled/rejected
// - fulfilled => means that the operation was successful and that we have data
// - rejected => the operation did not run as expected - something went wrong


const array = [];

//You can build a promise from scratch using the Promise class that's in-built in JavaScript 
//The constructor will take a callback function with 2 arguments: resolve, reject
//Quick refresher: callback functions are function passed as ARGUMENTS to other functions.

//Write a Promise Object from scratch
const promiseToWakeUp = new Promise((resolve, reject) => {
    let fulfilled = true;

    if (fulfilled) {
        //Here, I make sure the promise is fulfilled by calling the "resolve" function - this means that
        // the string value will be available down the promise chain
        resolve("Claire wakes up and feeds the cat");
    } else {
        //Oh no! It's 6 o'clock on Sunday and I want to sleep - we will reject the promise and catch the error
        //I use the reject function to pass the error down the promise chain to the catch block
        reject("Claire doesn't wake up - Sigrid is mad");
    }
    //.then() is a method you can call on a promise object - it takes a callback function as an argument
}).then((successString) => {
    console.log(successString);
    // The value here will be "Claire wakes up and feeds the cat" since it's what the promise above resolved with. 
    
    return successString;
    //=> returns a new Promise
    
  //calls .then() method on this new returned Promise
}).then((successString) => {

    //You can't get anything "out" of a promise chain - try console.log() this array at different point in the execution
    //and making prediction as to what it will be!

    array.push(successString);
    console.log(array);

}).catch((errorString) => {
    console.log(errorString);
})

console.log(array);

//Write fetch requests, which are promises
//Fetch requests return promises

const url = "https://pokeapi.co/api/v2/pokemon/ditto"

const fetchDataFromApi = () => {
    return fetch(url)
    .then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    })
}

const awaitDataFromApi = async () => {
    // The "try" block here contains the equivalent to the whole promise chain using .then() blocks
    try {
        const response = await fetch(url); //same as fetch(url).then(() => {})
        const data = await response.json();

        return data; 
    }
    catch { 
        console.log("There's a problem")
    }
}

fetchDataFromApi().then((data) => { console.log(data) })
awaitDataFromApi().then(((data)) => { console.log(data) })

