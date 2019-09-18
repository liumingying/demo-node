#!usr/bin/node

const Dog = require('./02-ddd');

var taidi = new Dog('taidi',4);
var zangao = new Dog('zangap',9);

taidi.on('bark',function(){
  console.log('%s')
})
