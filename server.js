var express = require('express');

var server = express();
server.use('/js', express.static(__dirname + '/js'));
server.use('/css', express.static(__dirname + '/css'));

server.get('/*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 8000;

server.listen(port, function() {
  console.log('server listening on port ' + port);
});
