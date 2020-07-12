const fs = require('fs')

// create file and overwrite
fs.writeFile('test.txt', 'hello file.', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('ok')
    }
})

// append file
fs.appendFile('test.txt', 'Hello append.', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('ok')
    }
})

// read file
fs.readFile('test.txt', 'utf-8', (err, content)=>{
    if(err){
        console.log(err)
    }else{
        console.log(content.toString('utf-8'))
    }
})

// delete file
fs.unlink('test.txt', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('ok')
    }
})
