const EventEmitter = require('events');
const uuid = require('uuid');

//class
class Logger extends EventEmitter {
    log(msg) {
        // call event
        this.emit('message', {id:uuid.v4(), msg})
    }
}

const Logger = require('./logger');
const logger = new Logger();
logger.on('message',data => console.log(`called listener:`,data));

logger.log('Hello Sam');
logger.log('Hello saam');
logger.log('Hello rish');

module.exports= Logger;