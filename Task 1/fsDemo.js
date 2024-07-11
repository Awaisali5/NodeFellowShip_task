// import fs, { readFileSync } from 'fs'
import { appendFile } from 'fs';
import fs from 'fs/promises'
// ReadFile () call back 

// fs.readFile('./test.txt', 'utf-8', (err, data)=> {
//     if(err) throw err;
//     console.log(data);
// });


// readFileSync() synchronous version 

// const data= fs.readFileSync('./test.txt', 'utf8');

// console.log(data);


// ReadFile -promise .then()

// fs.readFile('./test.txt' ,'utf-8' )
// .then((data) =>console.log(data)).catch((err) => console.log(err));


// readFile() - async/Await 

const readFile = async () => {
    try{
        const data=  await fs.readFile('./test.txt', 'utf-8')
console.log(data);

    }catch(error){

        console.log(error);
    }
};


// Write File 
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, this is the example of writing the file');
        console.log('File writing....')
        
    } catch (error) {
        console.log(error)
        
    }
}


// appendFile 

const AppendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\n This is the new writing line');
        console.log('File appending...')
    } catch (error) {
        console.log(error);
        
    }
}


writeFile();
AppendFile();
readFile();