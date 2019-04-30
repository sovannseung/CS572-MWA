function getEven(arr){
    let localresult = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0) localresult.push(arr[i]);
    }
    return localresult;
}

function getOdd(arr){
    let localresult = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0) localresult.push(arr[i]);
    }
    return localresult;
}

Array.prototype.even = async function(){
    let result=[];
    result = await getEven(this);
    console.log(result);
}

Array.prototype.odd = async function(){
    let result=[];
    result = await getOdd(this);
    console.log(result);
}

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');