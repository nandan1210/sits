var readline=require('readline')
var k=readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
k.question("enter first number:",
           (x)=>{
             k.question("enter second number:",
              (y)=>{
                var z=Number(x)+Number(y);
                console.log("Sum:"+z);
             })
            });
