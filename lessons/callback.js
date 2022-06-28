const f1 = (val, callback) => {
    return callback(val + 10)
}

const callback = (val) => {
    return val + 20;
}

console.log(f1(7, callback));