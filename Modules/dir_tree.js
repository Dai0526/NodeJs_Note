/*
Example:

|-test
|-node0.js
|-node1.js
|-test2
    |-node2.js
|-readme.md

Idea:
1. get a list of items under root dir
2. iter the list, check each item recursively
*/


const fs = require('fs')
const path = require('path')

getDirInfo('../../nodejs/', 0)

// read target and print info
function getDirInfo(target, level){
    let pre = new Array(level).join('| ')

    let infos = fs.readdirSync(target);
    let files = []
    let dirs = []

    // divided files and dirs
    infos.forEach(item => {
        let fullpath = path.join(target, item)
        let state = fs.statSync(fullpath)
        if(state.isFile()){
            files.push(item)
        }else{
            dirs.push(item)
        }
    });

    // print dir first
    dirs.forEach(dir=>{
        console.log(`${pre}|-${dir}`)
        let childpath = path.join(target, dir)
        getDirInfo(childpath, level + 1)
    });

    // print files
    files.forEach(file=>{
        console.log(`|${pre}   |_${file}`)
    });

}
