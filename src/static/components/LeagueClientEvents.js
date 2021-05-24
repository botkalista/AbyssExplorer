const Lcu = require('ayaya-lcu-connector');
const lcu = new Lcu();

async function connect() {
    await lcu.connect();
}

/**
 * @param {(data:any,eventType:string,uri:string) => any} onEvent 
 */
async function listenForEvents(onEvent) {
    await lcu.listenForEvents(onEvent)
}

module.exports = {
    connect,
    listenForEvents
}