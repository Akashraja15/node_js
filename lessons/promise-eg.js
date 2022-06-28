// var a = 2;
new Promise((resolve, reject) => {
    setTimeout(() => resolve(2*2), 1000);
})

.then(x => {
    console.log(x);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x * 2), 1000);
    });
})
.then(x => {
    console.log(x);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x * 2), 1000);
    });
})
.then(x => {
    console.log(x);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x * 2), 1000);
    });
})
.then(x => {
    console.log(x);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x * 2), 1000);
    });
})
.catch(x => console.log("error", x))
.finally(() => console.log("finally"));