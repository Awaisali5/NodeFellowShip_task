import http from 'http';
import fs from 'fs/promises';
import url from 'url'
import path from 'path';

const PORT = process.env.PORT;


//get Current Path

const __filename= url.fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// console.log(__filename, __dirname);

const server= http.createServer(async (req,res) =>{
// res.write('hello world!');
// end the stream 

// res.setHeader('Content-type', 'text/html');


// res.statusCode = 404;

// console.log(req.url);
// console.log(req.method);

try{
    // check if Get req
    if(req.method === 'GET'){
        let filepath;
        // Routing 
if(req.url === '/'){
    filepath = path.join(__dirname, 'public', 'index.html');

}else if(req.url === '/about'){
    filepath = path.join(__dirname, 'public', 'about.html');
}else{
    throw new Error('Not Found')
   
}


// content-type and filepath 

const data= await fs.readFile(filepath);
res.setHeader('Content-Type:', 'text/html' );
res.write(data);
res.end();

    }else {
        throw new Error('Method Not allow');
    }
}catch(error){
    res.writeHead(500, {'Content-type': 'text/plain'})
    
    res.end('<h1>Server Error!!</h1>');

}



} );

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})