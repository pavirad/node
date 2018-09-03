const EventEmmitter  = require('events');

class Logger extends EventEmmitter{
    log(message){
        console.log(message);
        this.emit('logging', {id : 1, data : 'Testing class'});
    }
}

module.exports = Logger;
