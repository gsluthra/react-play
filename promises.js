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
    console.log('ERROR OCCURRED')
    return console.log(error);
});
