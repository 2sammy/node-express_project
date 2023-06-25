const http = require('http');
http.createServer((req,res) => {
    // write response
    res.write('helloo sam')
    res.end()
}).listen(5000,() => console.log('Server is running..'));