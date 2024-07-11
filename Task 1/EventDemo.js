import {EventEmitter} from 'events';
import { register } from 'module';
const myEmitter= new EventEmitter();


function greetHandler() {
    console.log('Hello world');
}
function goodbyeHandler() {
    console.log('Good bye!');
}


// register event listener

