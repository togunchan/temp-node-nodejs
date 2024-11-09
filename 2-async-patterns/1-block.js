const http = require('http')

const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type' : 'text/html'})
    if(req.url === '/'){
        res.end('Welcome to our home page')
        return
    }
    if(req.url === '/about'){
        // BLOCKING CODE!!!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('Welcome to our about page')
        return
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href='/'>Back Home</a>
    `)
})

server.listen(5001)