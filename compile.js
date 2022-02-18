#!/usr/bin/env node

var fs = require('fs');
var filename = process.argv[2];
var code = fs.readFileSync(filename);
console.log('javascript:' + encodeURIComponent(code));
