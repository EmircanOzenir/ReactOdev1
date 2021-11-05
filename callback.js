import getData from "./app.js";

getData(2);

// setTimeout(() => {
//     console.log("Merhaba");
// }, 2000)

// setInterval(() => {
//     console.log("Merhaba ben her saniye");
// }, 1000);

// const sayHi = (cb) => {
//     cb
// }

// sayHi(() => {
//     console.log("Hello");
// });

// import fetch from "node-fetch";


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) =>{
//     console.log("Users Yuklendi!", users);

//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((data) => data.json())
//     .then((posts) => console.log(posts));
// });

// async function getData() {
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }

// getData();

// (async () => {
//     const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");
//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);

// })();

// const getUsers = () => {
//     return new Promise(async(resolve, reject) =>  {
//         const {data} = await axios("https://jsonplaceholder.typicode.com/users");

//         resolve(data);
//     });
// };

// const getPost = (post_id) => {
//     return new Promise(async(resolve, reject) =>  {
//         const {data} = await axios("https://jsonplaceholder.typicode.com/post/" + post_id);

//         resolve(data);
//     });
// };



// (async () => {
//     try {
//         const users = await getUsers();
//         const post = await getPost(1);

//         console.log(users);
//         console.log(post);
//     } catch (e) {
//         console.log(e);
//     }
// })();