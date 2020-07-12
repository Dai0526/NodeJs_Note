const fs = require('fs')

// create 
fs.mkdir('./testmk', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('ok')
    }
})

// update
fs.rename('./testmk', './testrn', (err)=>{
    if(err){
        console.log('fail to rename dir.')
        console.log(err)
    }else{
        console.log('ok')
    }
})

// rm
fs.rmdir('./testrn', (err)=>{
    if(err){
        console.log('fail to remove dir.')
        console.log(err)
    }else{
        console.log('ok')
    }
})