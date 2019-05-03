const EventEmitter = require('events');

class Gym extends EventEmitter{
    constructor(){
        super();
        setInterval(() => {
            this.emit('boom');
        }, 1000);
    }
}

var objGym = new Gym();

objGym.on('boom',()=> console.log("Athlete is working out"));