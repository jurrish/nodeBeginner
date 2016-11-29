var http = require('http');
var url = require('url');

// http.createServer(function(req, res) {
//   res.writeHead(200, {"Content-Type": "text/plain"});
//   res.write("Hello World");
//   res.end();
// }).listen(8888);

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('request for ' + pathname + ' received');

    route(handle, pathname, response);
  };

  http.createServer(onRequest).listen(8888);

  console.log('server has started');
};

exports.start = start;
