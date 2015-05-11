#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');
var filenames = process.argv.splice(2);

Commander
  .option('-h, --help', 'Output usage information')
  .option('-v, --version', 'Output the version numner')
  .option('-n, --number', 'Report just the number of words')
  .option('-v, --verbose', 'Be more verbose, report timing information')

filenames.forEach(function(filename) {
  fs.readFile(filename, {encoding: 'utf8'}, function(error, contents){
    console.log(contents);
  });
});

if(commander.help){

}

if(commander.version){

}

if(commander.number){

}

if(commander.verbose){

}
