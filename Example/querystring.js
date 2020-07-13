const qs = require('querystring')

let str = 'name=tianhua&pass=123&gender=0&hobby=basketbal&hobby=77'

/* 
parse - query to obj
*/
let qsObj = qs.parse(str, '&', '=')
console.log(qsObj)

// stringify - obj to string
let str2 = qs.stringify(qsObj, '&', '=')
console.log(str2)


// escape and unescape 解码 （注意与解密不同）
let strcn = 'fn=天桦&ln=Fang'
let strcn_de = qs.escape(strcn)
console.log(strcn_de)

strcn = qs.unescape(strcn_de)
console.log(strcn)

