### 模块化
+ 内置模块
    - IO 文件操作
+ 第三方模块
+ 自定义模块
    - 创建模块
    - 导出模块
    - 引用模块


#### Example - Print the dir tree

#### Error Handling
+ Try Catch - prevent program break
+ Callback func - Async func for error reporting

#### URL Library
`https://nodejs.org/docs/latest-v13.x/api/url.html`

https:47.95.207.1:3000/fcj/recommend/hot/hehe?us=123&ps=576#hello

+ [https] protocol
+ [47.95.207.1] host
+ [3000] port
+ [/fcj/recommend/hot/hehe] path name
+ [?us=123&ps=576] query string
+ [#hello] hash

#### QueryString
+ encode
+ decode
+ escape
+ parse
+ stringify
+ unescape

#### Third Party Library

### 爬虫案例

### 邮箱验证码案例
 注册案例 注册时通过邮箱验证来限制有效用户
 如果代码不严谨，api被人利用，则可以利用api对手机或者邮箱发消息产生fraud。所以现在的做法是对验证码要加上一个验证码。

使用第三方module
 + nodemailer 3rd party for email notification
 
Download 3rd party module
 + npm

Initialization: `npm init --yes`
Install package: `npm install nodemailer`

