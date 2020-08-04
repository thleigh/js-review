# Node Readme

## How to make a node project

1. In terminal, create a new directory
2. Inside the directory, input 'npm init'
3. Create an index.js
4. To run the program: node index.js
5. OR use nodemon
    - to quit nodemon, type control + c
    - to restart, type rs

## Node essentials
### Creating and exporting modules

1. Creat your module: 
```javascript
    module.exports.beBasic = () => "That's so fetch!";
```
2. Import your module in index.js
```javascript
    const myModule = require('./myModule.js');
    console.log(myModule.beBasic());
```

### fs module
Example of an fs module: (file system module, used to read a text file)
```javascript
    const fs = require('fs');

fs.readFile('story.txt', 'utf8', (err, data) => {
    if(err) {
        console.log('There was a problem reading the file.');
    } else {
        console.log(data);
    }
})
```

### HTTP Core Module
``` javascript
    const http = require('http');

    http.createServer((req, res) => {
        res.write('Hello,World!');
        res.end()
    }).listen(8000)
```

## NPM (Node Package Manager)

1. Go to the NPM website
2. To install: npm install chosenNpm
3. At the top you must include
```javascript
    const variable = require('chosenNpm');
```
4. To make sure the node moldes folder doesn't upload to github, create a .gitignore file and type node_modules in the first line. 

