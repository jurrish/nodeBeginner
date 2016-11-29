'use strict';

const exec = require('child_process').exec;

function start(response) {
  console.log('request handler START was called');

  exec('ls -lah', function(error, stdout, stderr) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
  console.log('request handler UPLOAD was called');
  response.writeHead(200, {'content-type': 'text/plain'});
  response.write('hello upload');
  response.end();
}

exports.start = start;
exports.upload = upload;
