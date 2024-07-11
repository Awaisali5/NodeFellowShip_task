import path, { basename, dirname, extname } from 'path';

const filepath= './dir1/dir2/test.txt';

// basename 
console.log(path.basename(filepath));

// dirname 
console.log(path.dirname(filepath));

// extname
console.log(path.extname(filepath));

// parse() 

console.log(path.parse(filepath));