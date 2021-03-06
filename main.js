var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    let queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    
    console.log(url.parse(_url, true))

    if(pathname === '/'){
      if(queryData.id === undefined) {
        
        fs.readFile(`nodejs/data/${queryData.id}`, 'utf8', function(err, description) {
          var title = 'Welcome';
          var description = "Hello node.js";
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          response.end(template);
        });
      } else {
        fs.readFile(`nodejs/data/${queryData.id}`, 'utf8', function(err, description) {
          var title = queryData.id
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          response.end(template);
        });
      }
  } else {
    response.writeHead(404);
    response.end('page not found');
  }
    
 
});
app.listen(3000);