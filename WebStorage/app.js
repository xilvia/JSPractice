import {
    cookieStore
} from './webStorage';
import cookieHandler from './webStorage';
import ld from './webStorage';

console.log(cookieStore("check", 4))
cookieHandler.setCookie("uuid", 1354774631237);
console.log(JSON.parse(sessionStorage.getItem("1354774631237")));