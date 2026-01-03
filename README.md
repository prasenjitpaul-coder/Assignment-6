Node.js Simple Website Server

This project is a basic Node.js HTTP server that serves multiple HTML pages, a CSS file, handles a POST request, and shows a custom 404 page — without using Express.

It is made to understand how routing works in core Node.js.





 **Features**

Serves multiple pages:

Home (/ or /home)

About (/about)

Contact (/contact)

Serves CSS file (/style.css)

Handles form submission using POST (/submitted-data)

Redirects after form submission

Custom 404 error page

Built using pure Node.js

############################
...........................
 Project Structure
project-folder/
│
├── home.html
├── about.html
├── contact.html
├── 404.html
├── style.css
├── server.js
└── README.md
......................
 Requirements

Node.js installed
Check using:

node -v

......................
 
 
 How to Run the Project

Open terminal inside the project folder

Run the server:

node server.js


Open browser and go to:

http://localhost:3000

 Available Routes
URL	        Method	 Description
/ or /home	 GET	 Home page
/about	         GET	 About page
/contact	 GET	 Contact page
/style.css	 GET	 CSS file
/submitted-data  POST	 Form submission
Any other URL	 GET	 404 Page

 How POST Request Works

When a form is submitted from contact.html:

<form action="/submitted-data" method="POST">


The server:

Detects the POST request

Redirects the user to the home page

res.writeHead(302, { Location: "/" });
res.end();

 How CSS is Loaded

The browser requests:

/style.css


The server reads the CSS file and sends it with:

Content-Type: text/css


This allows styles to apply correctly.

 Important Concepts Used

http.createServer() – creates the server

req.url – checks requested route

req.method – checks request type (GET / POST)

fs.readFile() – reads HTML & CSS files

__dirname – gets correct file path

return res.end() – stops multiple responses

 Learning Purpose

This project helps you understand:

How routing works in Node.js

Why static files need separate handling

How POST requests work

Why Express.js is useful later
