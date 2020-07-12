const fs = require('fs')

// read file for current dir
// if error occurs, program breaks. - use try catch for error handling
try{
    let dirs_sync = fs.readdirSync('./')
    console.log('Read dir sync result: ')
    console.log(dirs_sync)
}catch(err){
    console.log("err = " + err)
}

// async need a call back function
// call back function - error comes first for error handling
let dirs_async = fs.readdir('./', (err, data)=>{
    if(err){
        console.log('err = ' + err.err)
    }else{
        console.log('Read dir async result: ')
        console.log(data)
    }
})


