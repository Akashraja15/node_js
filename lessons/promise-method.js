const x = () => {
    return new Promise((res, rej) => {
        setTimeout(() => res("from x resolved"), 1000);
    });
};

const y = () => {
    return new Promise((res, rej) => {
        setTimeout(() => res("from y resolved"), 3000);
    });
};

const z = () => {
    return new Promise((res, rej) => {
        setTimeout(() => rej("from z resolved"), 5000);
    });
};


// Promise.all([x(), y(), z()])
// Promise.allSettled([x(), y(), z()])
Promise.race([x(), y(), z()])
.then(result => console.log("success : ",result))
.catch(error => console.log("error : ",error))