// // CLI node index == Runs node code in CLI
// const name = 'Giovanni'
// const hostname = '127.0.0.1';
// const port = 3000;

// const http = require('http');
// const url = require('url')
// const fs = require('fs')

// const server = http.createServer((request, response) => {
//     const path = url.parse(request.url).pathname;
//     console.log(path)
//     //response.writeHead(200, {'Content-Type': 'text/HTML'});  
//     //response.write("This is Test Message.");  
//     //response.end(); 
//     console.log(path)
//     switch (path) {  
//         case '/':  
//             fs.readFile(__dirname + path + 'index.html', function(error, content) {
//                 if (error) {
//                     response.writeHead(404);  
//                     response.write(error);  
//                     response.end();
//                 } else {
//                     response.writeHead(200, {'Content-Type': 'text/html'});  
//                     response.write(content);
//                     response.end();
//                 }
//             })
//             break;
//         default:
//             response.writeHead(404);  
//             response.write("opps this doesn't exist - 404");  
//             response.end();
//             break;
            
//         }
//   //res.statusCode = 200;
//   //res.setHeader('Content-Type', 'text/plain');
//   //res.end('Hello World');
//   //console.log(name)
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });