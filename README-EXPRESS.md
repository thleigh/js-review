# Express README

## How to make an Express project
1. Make sure node is initialized by: npm init
2. Install Express through: npm i express
3. Create an entry point file: touch index.js (make sure to add an .gitignore file)
4. Import the Exprpess module inside of index.js: const express = require('express');
5. Create an instance of an express app: const app = express();
6. Create a home route: 
```
  app.get('/', function(req, res) {
      res.send('Hello, World!');
});

app.listen(8000);
```
7. Run nodemon
8. Visit localhost:8000 in your browser!

## Parameters
We can also pass variables in as part of a URL. By putting a colon before a string in our route, we can create routes with parameters.

Example:
```
  app.get("/multiply/:x/:y", (req, res) => {
    res.send("The answer is: " + (req.params.x * req.params.y));
  });
```

## Query Strings
You can also pass in a special set of key-value pairs as the last part of the URL. They are called QUery strings because 
they are typically only included with GET requests. It gives us a way to pass in additional parameters to the query.

localhost:8000/some/data?key1=value&key2=value2

```
  app.get("/querystring", (req, res) => {
    let printout = '';
    for (let key in req.query) {
      printout += key + ": " + req.query[key] + "<br />";
    }
    res.send("Here's what they sent: <br /><br />" + printout);
});
```

## Views
Connecting HTML files!

1. Create a views foler inside your project directory and create the HTML files inside.
2. Implement this code:
```
  app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/index.html');
});
```

## Templates
Templates allow us to inject values into the HTML and even script logic into the HTML

1. First, install EJS: npm install ejs
2. Set the view engine to EJS. Add this above your routes.
```
  app.set('view engine', 'ejs');
```
3. Then, rename your .html files to .ejs files
4. Replace your res.sendFile's with: res.render('filename');
Ex: 
```
  res.render('index')
```

## Templating with Variables
Templating with variables means we can pass in an object to res.render() and access the values stored in it as variables inside the ejs template.

1. index.js
```
    app.get('/', function(req, res) {
    res.render('index', {name: "Tanner Leigh", age: 23});
});
```
2. index.ejs
```
  <h1>Hello, <%= name %>!</h1>
```
The addition of the = sign on the opening tag means that a value will be printed to the screen.
<% %> without the = will not print out the expression, but it will execute it. This comes in handy for if statements and loops.

Examples of variable usage:
```
    <% var status %>
    <%if (dogAge<100) {%>
      <% status = 'young' %>
    <%} else {%>
      <% status = 'old' %>
    <% } %>
```

