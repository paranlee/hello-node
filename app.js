/**
 *
 *  Copyright: Paran Lee
 *
 *  Geotools Schema Store JSON file.
 * 
 *  Author: Paran Lee  <p4ranlee@gmail.com>
 * 
 */

"use strict";

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
	const url = req.url;
    const method = req.method;
	
	/**
	 * Error
	 */
    req.on('error', err => {
        console.error(err);
        // Handle error...
        res.statusCode = 400;
        res.end('400: Bad Request');
        return;
    });

    res.on('error', err => {
        console.error(err);
        // Handle error...
    });

	if (url === '/') {
		// Set the response HTTP header with HTTP status and Content type
		res.writeHead(200, {"Content-Type": "text/plain"});
			
		// Send the response body "Hello, node.js!"
		res.end("Hello node.js!\n");
        return;
	}

	/**
	 * GET File
	 */
    fs.readFile(`./static${url}`, (err, data) => {
        if (method !== 'GET') {
            return;
        }

        if (err) {
            res.statusCode = 404;
            res.end('404: File Not Found');
            return;
        }

        /**
         * NOTE: The file name could be parsed to determine the
         * appropriate data type to return. This is just a quick
         * example.
         */
        res.setHeader('Content-Type', 'application/octet-stream');
        res.end(data);
    });

//Create HTTP server and listen on port 8080 for requests
}).listen(8080);

// Print URL for accessing server
console.log('hello-node server at http://127.0.0.1:8080/');
