var http = require('http')
var fs = require('fs')

http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8') // this method makes the data chunked
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })

    fileStream.on('error', (err) => {

    })
}).listen(5001)