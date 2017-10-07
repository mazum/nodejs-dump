var http=require('http');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    var a= 0.1+0.2+0.3;
    var b= 0.3+0.2+0.1;
    response.write('\n0.1+0.2+0.3 = '+ a.toString());
    response.write('\n0.3+0.2+0.1 = '+ b.toString());
    response.end();
}

http.createServer(onRequest).listen(8000);