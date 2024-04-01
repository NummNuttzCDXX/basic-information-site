const http = require('node:http');
const fs = require('node:fs');

http.createServer((req, res) => {
	let filepath = './';
	// Check the requested URL to get the correct page
	switch (req.url) {
		case '/':
			filepath += 'index.html';
			break;
		case '/about':
			filepath += 'about.html';
			break;
		case '/contact-me':
			filepath += 'contact-me.html';
			break;
		case '/styles.css': // Stylesheet
			filepath += 'styles.css';
			break;
		default: // Error page by default
			filepath += '404.html';
			break;
	}

	// Read the requested file
	fs.readFile(filepath, (err, data) => {
		if (err) { // Throw error if error
			res.writeHead(404, {'Content-Type': 'text/html'});
		} else { // Page is 'ok'
			const type = filepath.includes('css') ? 'text/css' : 'text/html';
			res.writeHead(200, {'Content-Type': type});
		}

		// Serve the requested HTML file | Error Page
		res.end(data);
	})
}).listen(8080, 'localhost');
