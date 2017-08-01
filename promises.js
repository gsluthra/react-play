//Simple promises code

let promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1");

promise1
.then((response) => response.json())
.then((json) => {
    let {userId, id} = json;
    return userId;
})
.then((userId) => {
    let promise2 = fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`);
    return promise2;
})
.then((response) => response.json())
.then((commentsJson) => {
    return commentsJson.map(elem => elem.email);
})
.then(console.log)
.catch(error => {
    console.log('ERROR OCCURRED');
    return console.log(error);
});


//Chaining promises correctly
console.log("PART 2: Chaining correctly.............");

let p1 = fetch("https://jsonplaceholder.typicode.com/posts/2");
let p2 = fetch("https://jsonplaceholder.typicode.com/posts/2/comments");
let p3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000, 'foo-reponse');
});

p1.then(p2).then(p3).then((d) => console.log('###', d)); //Note how since you aren't returning futures, this prints the first futures response

p1.then(() => p2).then(() => p3).then((d) => console.log('$$$$', d)); //Right way to chain promises. Pass functions that return promises.

console.log("end! :/");

// Using Promises.all
console.log("PART 3: Promises.all.............");

let pp1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 5000, 'pp1-foo-reponse');
});
let pp2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 'pp2-foo-reponse');
});
let pp3 = new Promise((resolve, reject)=>{
    reject("FU!"); //Comment this line and see difference.
    //return resolve("OK!");
});

Promise.all([pp1, pp2, pp3]).then(([pp1Response, pp2Response]) => { //Note how the array has be de-constructed to get a handle to responses.
    console.log('Got all responses');
    console.log('pp1 Response:', pp1Response);
    console.log('pp2 Response:', pp2Response);
}).catch(console.log);
