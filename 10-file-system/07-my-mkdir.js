#!/usr/bin/node

const fs = require('fs'),
  dir = process.argv[2];

fs.mkdirSync(dir); //目录的权限

//fs.statSync(dir+content).is
