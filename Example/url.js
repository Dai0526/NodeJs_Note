const url = require('url')

/*
url object 类比 json
url.parse 将url字符串转换为对象
url.format 将url对象转换为字符串
*/

let urlString = 'https://127.0.0.1:8080/fth/recommend/hot/hehe?us=123&ps=567#hello'
let urlObj = url.parse(urlString)
console.log(urlObj)

// reverse obj to string
let urlObj2 = 
{
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: '127.0.0.1:8080',
    port: '8080',
    hostname: '127.0.0.1',
    hash: '#hello',
    search: '?us=123&ps=567',
    query: 'us=123&ps=567',
    pathname: '/fth/recommend/hot/hehe',
    path: '/fth/recommend/hot/hehe?us=123&ps=567',
    href: 'https://127.0.0.1:8080/fth/recommend/hot/hehe?us=123&ps=567#hello'
}

let urlString2 = url.format(urlObj2)
console.log(urlString2)