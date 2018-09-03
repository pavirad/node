function log(message) {
    //console.log(message);
    logEmmitter.emit('logging', {id : 1, data : 'message'});

}

module.exports.log = log;


const EventEmmitter = require('events');
const logEmmitter = new EventEmmitter();

logEmmitter.on('logging', (arg) => {
    console.log('Listener called ', arg);
})

