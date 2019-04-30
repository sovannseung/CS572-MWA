// Use ES6 features
String.prototype.filterWords= function (words) {
    const wordlist = this.split(' ');
    const result = wordlist.map(w => words.includes(w)?'***':w);
    return result.join(' ');
};
console.log('[Use ES6] ' + 'This house is nice !'.filterWords(['house', 'nice']));


// Use Promise
String.prototype.filterWords= function (words) {
    const str = this;
    const myPromise = function(){
        return new Promise(function(resolve, reject){
            const wordlist = str.split(' ');
            const result = wordlist.map(w => words.includes(w)?'***':w);
            resolve(result.join(' '));
        })
    }
    myPromise().then(data => console.log('[Use Promise] ' + data));
}
'This house is nice !'.filterWords(['house', 'nice']);


// Use Async / Await
function replaceWords(str, words){
    const wordlist = str.split(' ');
    const result = wordlist.map(w => words.includes(w)?'***':w);
    return result.join(' ');
}

String.prototype.filterWords = async function(words){
    const result = await replaceWords(this, words);
    console.log('[Use Async/Await] ' +result);
}
'This house is nice !'.filterWords(['house', 'nice']);


// Observables
String.prototype.filterWords = function(words){
    let result;
    const str = this;
    const wordlist = str.split(' ');

    const { from } = rxjs;
    const { map, reduce } = rxjs.operators;

    from(wordlist).pipe(
        map(w => words.includes(w)?'***':w),
        reduce((x,y) => x + ' ' + y)
    )
    .subscribe(
            w => result = w
    );
    console.log('[Use Observables] ' + result);
}
'This house is nice !'.filterWords(['house', 'nice']);
