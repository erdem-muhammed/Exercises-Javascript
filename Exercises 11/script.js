/////export.js

import { addition } from "./export.js";
console.log(addition);
console.log(addition(5, 7));

import { x, y, z} from "./export.js";
console.log(x, y, z);


///// export2.js


import { loggedIn } from "./export2.js";

console.log(loggedIn);
console.log(loggedIn());