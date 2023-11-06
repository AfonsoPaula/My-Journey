const fs = require('fs')

// remove folder
if(fs.existsSync('./folder2')){
    fs.rmdir('./folder2', (err) => { // if the folder has contents: fs.rm('./folder2', { recursive: true }, (err) => {
        if(err){
            console.log(err)
        }else{
            console.log('Folder2 deleted successfully.')
        }
    })
}else{
    console.log('Folder not found.')
}