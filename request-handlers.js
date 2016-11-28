'use strict';

const exec = require('child_process').exec;

function start() {
  console.log('request handler START was called');
  let content = 'empty';

  exec('ls -lah', function(error, stdout, stderr) {
    content = stdout;
  });
  return content;
}

function upload() {
  console.log('request handler UPLOAD was called');
  return 'hello upload';
}

exports.start = start;
exports.upload = upload;
