#!usr/bin/node

const EventEmitter = require('events').EventEmitter ,
      util        = require('util');
function Radio(station){
  var _listeners  ={
    'play':[fn1,]
  }
  
  },0);
  setTimeout(()=>{
    emit('stop',station);
  },5000);

function emit(evt,arg){
  if(typeof(_listeners[evt])=== 'undefined'){
    console.error('Error :%s not defined',evt);
    process.exit(1);
  }
  _listeners[evt].forEach((fn)=>{
    fn.call(this,arg);
  });


}
  
this.on = (evt,fn)=>{

}

