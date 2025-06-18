//  InterConversionJSONtoanObjectinNode.js

 const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

 const jsonObject = JSON.parse(jsonString); // Convert JSON string to object

 console.log(jsonObject.name); // Output: John


//  —--------------------------------------------------------------

const obj = {
    name : 'dev',
    age : 20
}

const jsonobj = JSON.stringify(obj)
console.log(jsonobj);

