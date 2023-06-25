const http = require('http');
const path = requi('fs');

const server = http.createServer((req,res) => {
if(req.url ==='/') {

    fs.readFile(
        path.join(__dirname,'public','index.html'),
        (err,content) => {
            if (err) throw err;
            res.write(200,{'Content-Type': contentType} );
            res.end(content)
        }

    );
    
}
if(req.url ==='/api/users'){
    const users = [
        {name: 'sam sanchez',age: 24},
        {name: 'zalo small',age:25}
    ];
    res.write(200,{'Content-Type': 'application/json'} );
    res.end(JSON.stringify(users));
    const filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );
    //extension of the file
    let extname = path.extname(filePath);
    //initial content type
    let contentType = 'text/html';

    //check ext and set content type
    
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType ='text/css';
            break;
        case '.json':
            contentType ='application/json';
            break
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;


    }
    //readfile
    fs.readFile(filePath,(err,content) =>{
        if(err ){
            if(err.code = 'ENOENT'){
                // page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'})
                    res.end(content,'utf8');
                })
            } else {
                //some server error
                res.writeHead(500);
                res.end(`server Error: ${err.code}`);
            }
        }else {
            //success
            res.writeHead(200, {
                'content-Type': 'text/html'
            });
            res.end(content, 'utf8');
        }
    })
}
}


)

const PORT= process.env.PORT || 5000;
server.listen(PORT,() => console.log(`server running on port ${PORT}`));