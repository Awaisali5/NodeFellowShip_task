import url from 'url';


const urlString = 'https:www.google.com/search?q=hello+world';


// url object 

// url construction 

const urlobj= new URL(urlString);

console.log(urlobj);

// format 

console.log(url.format(urlobj));


// import meta.url - file Url 
console.log(import.meta.url);
