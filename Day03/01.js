const {resolve4} = require('dns');
const {promisify}= require('util');

// 1. Use dns core module, resolve4()
resolve4("www.mum.edu",(err,data)=>console.log("1. Use dns core module ==> "+ data));

// 2. Use promise object
var myIp= promisify(resolve4);
myIp("www.mum.edu")
.then((data)=>{console.log("2. Use promise object ==> "+data)});

// 3. Use async/await
async function myIpfun(){
    try{
        const text = await myIp("www.mum.edu");
        console.log("3. Use async/await ==> "+text);
        }catch(err){
            console.log("Error async/await==> "+err);
        }
}

myIpfun();