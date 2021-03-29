// ASYNC BASICS EXERCISE
// 1. Add a callback to the “falcon” function so the value of `Sam Wilson` will display in the terminal/console for the name1 variable when the falconName function is run.
// 1
let name1 = "Falcon";
function falconName() {
    console.log(`Question 1`);
    console.log(name1);
}
function falcon(n, callback) {
    setTimeout(() => {
        name1 = n
        callback();
    }, 1000);
}
falcon(`Sam Wilson`, falconName);


// 2. Create a promise in the winterSoldier function (Put the setTimeout inside the function with the resolve and reject parameters that is passed into the Promise). Also, consume the promise that is now returned from the winterSoldier function in a way that the value of `Bucky Barnes` will display in the terminal/console for the name2 variable when the winterSoldierName function is run.
// 2
let name2 = "Winter Soldier";
function winterSoldierName() {
    console.log(`Question 2`);
    console.log(name2);
}

function winterSoldier(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            name2 = n;
            resolve();
        }, 2000);
    });
}

winterSoldier(`Bucky Barnes`)
    .then(winterSoldierName);

// function winterSoldier(n) {
//     setTimeout(() => {
//         name2 = n;
//     }, 2000);
// }
// winterSoldier(`Bucky Barnes`);
// winterSoldierName();

// // Example 1
// const div1 = document.querySelector(`#first`);
// const p1 = document.createElement(`p`);
// div1.append(p1);

// function getUserInfo(email) {
//     // A Promise takes one parameter which is a function with two parameters (Resolve & Reject)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(email);
//         }, 2000);
//     });
// }
// // The ".then" is the eqiuvalent to the callback function created using callbacks
// getUserInfo(`me@gmail.com`)
//     .then(e => p1.innerText = e);
// Or
// getUserInfo(`me@gmail.com`).then(e => p1.innerText = e);

// 3. Use a promise in the agent13 function (Put the setTimeout inside the function with the resolve and reject parameters that is passed into the Promise). Also, use Async/Await so the value of `Sharon Carter` will display in the terminal/console for the name3 variable when the falconName function is run.
// 3
// function agent13(n){
//   setTimeout(() => {
//     name3 = n;
//   }, 3000);
// }
// agent13('Sharon Carter');
// agent13Name();
let name3 = "Agent 13";
function agent13Name() {
    console.log(`Question 3`);
    console.log(name3);
}
function agent13(n){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        name3 = n;
        resolve();
      }, 3000);
    });
  }
  
  async function agent13Name(){
    await agent13(`Sharon Carter`);
    console.log(`Question 3`);
    console.log(name3);
  }
  agent13Name();

  // Or

async function func1(){
    await agent13(`Sharon Carter`);
    agent13Name();
  }
  func1();
  
// Example 1
// const div1 = document.querySelector(`#first`);
// const p1 = document.createElement(`p`);
// div1.append(p1);

// function getUserInfo(email) {
//     // A Promise takes one parameter which is a function with two parameters (Resolve & Reject)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(email);
//         }, 2000);
//     });
// }

// async function example1() {
//     const e = await getUserInfo(`me@gmail.com`);
//     p1.innerText = e;
// }
// example1();


// 4. Use Promise.all to display the values set for p1, p2, and p3 in a single array in the console/terminal.
// 4
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('First Promise')
//     }, 2000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Second Promise')
//     }, 3000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Third Promise')
//     }, 4000);
//   });