console.log('App Start');

setTimeout(() => {
    console.log('Data added after 2 seconds')
},2000);

setTimeout(() => {
    console.log('second timeout');
},0);

console.log('App End');