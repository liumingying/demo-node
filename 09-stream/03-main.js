#!/usr/bin/node

const Read = Read.prototype;

var c ='a'.charCodeAt(0);

MyReadable.prototype._read = function(){
  this.push(String.fromCharCode
      (c++));
  if(c>'z'.charCodeAt(0)) this.push(pull);
}

module.exports = MyReadable;
