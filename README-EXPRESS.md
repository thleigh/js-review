# Express README

## How to make an Express project
1. Make sure node is initialized by: 
```
    npm init
```
2. Install Express through: 
```
    npm i express
```
3. Create an entry point file: (make sure to add an .gitignore file)
```
    touch index.js 
```
4. Import the Exprpess module inside of index.js: 
```
const express = require('express');
```
5. Create an instance of an express app: 
```
const app = express();
```
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

### BONUS

Adding images to Express:
index.ejs file:
```
    <%- include ('../partials/header.ejs')%>
```
in a partials folder:
```
    <header>
        <img src="https://placekitten.com/500/500" alt="kitten">
    </header>
```


## Layouts

1. Make sure to install EJS layouts:
```
    npm install express-ejs-layouts
```

2. Require the module and add it to the app. It should look like:
```
    var express = require('express');
    var app = express();
    var ejsLayouts = require('express-ejs-layouts');

    app.set('view engine', 'ejs');
    app.use(ejsLayouts);

    app.listen(3000)
```

3. Create a layout. In he root of the views folder, add a layout called:
```
    layout.ejs
```
It MUST be called layout.ejs.

4. Insert this boilerplate to the layout.ejs
```
    <!DOCTYPE html>
    <html>
    <head>
        <title>Faves&Hates</title>
    </head>
    <body>
        <%- body %>
    </body>
    </html> 
```
This layout will be used by all pages, and the content iwll be filled in where the <%- body%> tage is placed.

5. Using the layout: In any new ejs file, it will use the layout.ejs boilerplate so new ones do not have to be rewritten.
```
    <h1>This is a home page!</h1>
```
That is all that is needed for the new ejs file.

## Controller & Express Router
Controllers become important organizational tools when you start making apps with several views, so let's create a few more views.

1. create a controllers folder in the roote directory that will contain all routes except for the home route.
2. Inside the controlelrs folder, create a file called example.js with the following routes.
3. 
```
    app.get('/examplePath', function(req, res) {
        res.render('exampleDir/foods', {title: 'Favorite Foods', foods: ['coconut', 'avocado']});
    });

    app.get('/examplePath2', function(req, res) {
        res.render('exampleDir2/animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
    });
```
4. Add these wrapper lines of code to example.js, and replace app with router.
```
    var express = require('express');
    var router = express.Router();
    app.get('/examplePath', function(req, res) {
        res.render('exampleDir/foods', {title: 'Favorite Foods', foods: ['coconut', 'avocado']});
    });

    app.get('/examplePath2', function(req, res) {
        res.render('exampleDir2/animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
    });
    module.exports = router;
```
5. Back in index.js:
```
    app.use('/faves', require('./controllers/exampleDir'));
```