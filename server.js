

const date = require('date-and-time')
const fs = require("fs")
const path = require("path")
const Direct = process.cwd();

//Get current date and Time.
const now = new Date();
const value = date.format(now, 'DD-MM-YYYY,HH-mm-ss')
// console.log(value);

//Make a text file with current date and time.
fs.writeFile(path.join(Direct + `/${value}.txt`), `${value}`, function (err) {
    if (err) throw err
    
})

//Read a File Directory.
    fs.readFile(`${Direct}/${value}.txt`,"utf-8",function(err,data){
    if(err) throw err;
    console.log(data);
})