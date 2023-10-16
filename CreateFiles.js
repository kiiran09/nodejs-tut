const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname);

for(let i = 1; i <= 5; i++) {
    fs.writeFileSync(dirPath + `/File${i}`, `This is file${i}`);
}

fs.readdir(dirPath, (error, files) => {
    if(error) {
        console.log("Error please try again", error);
        return;
    }

    files.forEach((file)=> {
        console.log(file);
    });
});