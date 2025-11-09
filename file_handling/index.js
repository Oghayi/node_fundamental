//Reading a file: Common Asynchronous File Operations
const fs = require("fs")

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err){
        console.log("Error reading file:", err);
        return;
    }else{
        console.log("File Content:", data)
    }
})
//Writing to a file
fs.writeFile("example.txt", "Hello welcome to TechCrush as a Baackend Developer using Node js", (err) => {
    if (err){
        console.log("Error writing file:", err);
        return;
    }
    console.log("content written successfully in example.txt file")
})
/*1.Appending a file
2. Deleting a file
3.Creating a folder
4.Reading All file in a directory
5. Study the syntax and concept on Async/Await with fs module
6.Create a server and 2 API's*/
//Appending to a file
fs.appendFile("example.txt", "\nThis is an appended line.", (err) => {
    if (err){
        console.log("Error appending file:", err);
        return;
    }
    console.log("Content appended successfully in example.txt file")
})
//Deleting a file
fs.unlink("example.txt", (err, data) => {
    if(err){
        console.log("Error deleting file", err);
        return;
    }else{
        console.log("File deleted successfully");
    }
    console.log("File content:", data)
})