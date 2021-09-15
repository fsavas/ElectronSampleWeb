var child = require('child_process').execFile;
var executablePath = "C:\\Projects\\TarpetClient\\TarPet.Forms\\bin\\Debug\\TarPet.Forms.exe";

child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});