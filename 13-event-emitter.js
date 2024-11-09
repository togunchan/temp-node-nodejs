const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data reveiced! User: ${name} with the ID:${id} `)
})

customEmitter.on('response', () => {
    console.log(`Some Other Logic Here.`)
})

customEmitter.emit('response', 'Amber', 18)