var express = require('express');

var server = express();
server.use('/js', express.static(__dirname + '/js'));

server.get('/*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var port = 8000;
server.listen(port, function() {
  console.log('server listening on port ' + port);
});
