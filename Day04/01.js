const os = require('os');

console.log("checking your system...");

const totalCPU = os.cpus().length;
const totalRAM = os.totalmem() / 1000000000;

var flag = true;

if(totalRAM < 4)
{
    console.log('This app needs at least 4 GB of RAM');
    flag = false;
}
    
if(totalCPU < 2){
    console.log('Processor is not supported');
    flag = false;
}

if(flag)
    console.log('System is checked successfully.');
    
