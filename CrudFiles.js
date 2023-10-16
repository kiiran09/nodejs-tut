const { error } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "Files");
const filePath = `${dirPath}/Apple.txt`;

// Creating a File

// fs.writeFileSync(filePath, "This is Apple file");

// Reading File Content

// fs.readFile(filePath, "UTF8", (error, file) => {
//     if(!error) {
//         console.log("File Content is : ", file);
//     }
// });

// RenameFile

// fs.rename(filePath, `${dirPath}/Samsung.txt`, (error) => {
//     if(!error) {
//         console.log(filePath, "is renamed");
//     }
// })

// Update File Content

// fs.appendFile(`${dirPath}/Samsung.txt`, " This is Samsunf file now", (error) => {
//     if(!error) {
//         console.log("File content is updated");
//     }
// });

// Delete File

fs.unlinkSync(filePath);