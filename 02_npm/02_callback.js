function callback()
{
    console.log('Callback function executed')
}


const add = function(num1,num2,callback)
{
    console.log(`Adding ${num1} and ${num2}`);
    const result = num1 + num2;
    callback(result);
}

add(3, 4, callback);
