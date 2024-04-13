const express = require('express');
const app = express();


// Define routes and send the correct HTML
app.get('/', (req, res) => {
	res.sendFile('/index.html', {root: __dirname});
})

app.get('/about', (req, res) => {
	res.sendFile('/about.html', {root: __dirname});
})

app.get('/contact-me', (req, res) => {
	res.sendFile('/contact-me.html', {root: __dirname});
})

// Add stylesheet
app.get('/styles.css', (req, res) => {
	res.sendFile('/styles.css', {root: __dirname});
})

// MiddleWare to catch err if path is not found
app.use((req, res) => {
	res.status(404);
	res.sendFile('/404.html', {root: __dirname});
})


// Start server at port 8080
app.listen(8080, 'localhost', () => {
	console.log('Server running on localhost:8080');
})
