const fs = require('fs')

// delete files
if(fs.existsSync('./dados1.txt')){
    fs.unlink('./dados1.txt', (err) => { // or < fs.rm >
        if(err){
            console.log(err)
        }else{
            console.log('File deleted successfully.')
        }
    })
}else{
    console.log('File not found.')
}