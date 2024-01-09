const fs = require('fs')

// create folders
if(!fs.existsSync('./folder1')){
    fs.mkdir('./folder1', (err) => {
        if(err){
            console.log(err)
        }else{
            console.log('Folder1 created successfully.')
        }
    })
}else{
    console.log('The folder1 already exists.')
}

if(!fs.existsSync('./folder2')){
    fs.mkdir('./folder2', (err) => {
        if(err){
            console.log(err)
        }else{
            console.log('Folder2 created successfully.')
        }
    })
}else{
    console.log('The folder2 already exists.')
}