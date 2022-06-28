const a1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("SUCCESS")
    }, 2000);
})

const a2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("HELLO")
        reject("FAILURE")
    }, 3000);
})

a1.then(console.log)
a2.then(console.log).catch(console.log)





// callback vs promise
const p1 = val => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(val + 10)
    }, 1000);
})

p1(5).then(x => x + 70).then(console.log)



// Promise status
// 1) pending
// 2) fulfilled
// 3) rejected

//promise method
// 1) promise.all
// 2) promise.allsettled
// 3) promise.race