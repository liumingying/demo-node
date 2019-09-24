#!/usr/bin/node

const p = require('./package.json');

console.dir(module);
console.log(p);

const circle = require ('./02-export-function');
console.log('r=10,circle area:%d',circle(10).area());
console.log('r=10,circle ');
