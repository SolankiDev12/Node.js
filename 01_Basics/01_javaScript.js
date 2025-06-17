var a = 5
var b = 10

console.log(`value of a is ${a} `);


//directly go throught the link  
// https://github.com/SolankiDev12/JavaScript

console.log('https://github.com/SolankiDev12/JavaScript')

const arr  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr.forEach( (i) => {
//     console.log(i);
// })
// arr.map( (i) => {
//     console.log(i);
// })

const ob = {
    name: 'Solanki',
    age: 20,
    city: 'Gujarat',
    country: 'India'
}


for( i in ob)
{
    console.log(`${i} : ${ob[i]}`);
}


const res = arr.filter(checkage)

function checkage(i)
{
    return i%2==0;
}

console.log(res);

// install npm i prompt-sync

