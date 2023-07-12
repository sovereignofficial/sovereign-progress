const promise = new Promise((resolve, reject) => {
    // Perform some operation, then call either resolve() or reject()
});

//apifetch
const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log('Fetch operation completed.');
    }
};

fetchData();

//performance
const promises = [fetch('https://api.example.com/data1'), fetch('https://api.example.com/data2')];
for (const promise of promises) {
    console.time('timer');
    try {
        await promise;
    } catch (error) {
        console.error(error);
    } finally {
        console.timeEnd('timer');
    }
}


//loading

let isLoading = true;

const fetchDataX = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        isLoading = false;
        console.log('Loading status:', isLoading);
    }
};

fetchDataX();



// file i/o

function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };
}

const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

readFileAsync('file.txt', 'utf8')
    .then(text => console.log(text))
    .catch(err => console.error(err));


//api calls w promise all
const promise1 = fetch('/api/data1');
const promise2 = fetch('/api/data2');
const promise3 = fetch('/api/data3');

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values);
    })
    .catch(error => {
        console.error(error.message)
    });

//promise race

var p = Promise.race([
    fetch('/resource-that-may-take-a-while'),
    new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('request timeout')), 5000)
    })
]);

p.then(response => console.log(response))
    .catch(error => console.log(error));
