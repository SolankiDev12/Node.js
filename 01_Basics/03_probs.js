//  Problem : Arrays
//  You're organizing a party and want to keep track of the guest list. Create an array called
//  "guestList" and add the names of at least five guests. Then, write a program that checks if a
//  given name is on the guest list. If the name is found, display "Welcome to the party, [name]!";
//  otherwise, display "Sorry, you're not on the guest list."

const guests = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const prompt  = require('prompt-sync')();

let guest = prompt('Enter the name of the guest: ');

if(guests.includes(guest)) {
    console.log(`Welcome to the party, ${guest}!`);
}
else {
    console.log(`Sorry, you're not on the guest list.`);
}


//  You're working on a weather app. Create a JSON object representing the weather forecast for
//  a specific day. Include properties like "date," "temperature," "conditions," and "humidity."
//  Display the information using console.log.

const weatherForecast = {
    date: '2023-10-01',
    temperature: '25°C',
    conditions: 'Sunny',
    humidity: '60%'
};
console.log(`Weather Forecast for ${weatherForecast.date}:`);
console.log(`Temperature: ${weatherForecast.temperature}`);
