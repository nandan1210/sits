var http=require('http')
var fs=require('fs')
var path=require('path')
http.createServer(
  function (req,res){
    fs.readFile('test.html',function (err,data){
       if(err) throw err;
       else
        {
           res.writeHead(200,{'content-type':'text/html'});
           res.write(data);
           res.end();
           console.log("Server Started Successfully.....")
         }
    });
  }
).listen(7593)