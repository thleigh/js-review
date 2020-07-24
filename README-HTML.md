# HTML Review

**This is my review of HTML.**

## THE HTML BOILERPLATE
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css"> //to link the css style sheet.
        <title>HTML Review</title> //Shows at the top of the webpage
    </head>
    <body>
        <script src="./app.js"></script> //to link the javascript.
    </body>
    </html>
```

## HTML Elements
```html
    <h1>Here is some text</h1> //h1 goes all the way to h6 depending on desired size.
    //elements can be nested
    <div> //div provides us with an empty container to store whatever content we'd like.
        <h1>Header example text</h1>
        <h2>Header2 example text</h2>
    </div>

    <span> //span is the same as div but only for 1 line.
        <p>span example</p>
    </span>

    //elements can also contain attributes, which are key-value pairs.
    <div data-attr="5"></div>
    <img src="imageurl.png"> //example of img attribute. note that there is no end </>
    //attributes class and id
    <div class="general-container"></div>
    <div class="general-container"></div>
    <span class="general-container"></span>

    <div id="specific-container"></div>
``` 

## Forms

```html
    //examples of forms
    <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required>
    </div>
    <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>
    </div>
    <div>
        <label for="age">Age</label>
        <input type="number" name="age" id="age" min="1" max="80" required>
    </div>
    <div>
        <label for="file">File</label>
        <input type="file" name="file" id="file">
    </div>
```