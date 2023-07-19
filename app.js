
const express = require('express');
const app = express();
const bodyparser=require('body-parser');
const fs=require('fs');


app.use(bodyparser.urlencoded({ extended: false }));


app.get('/',(req,res)=>{

    fs.readFile('username.txt','utf-8',(err,data)=>{
        if(err){
            data="No chat Exists";
        }
        res.send(`${data}<br><form action="/"method="post" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" name="message" id="" placeholder="Enter Message" /><br>
        <input type="hidden" name="username" id="username" placeholder="enter username">
        <button type="submit">Send Message</button>
        </form>`);
    })
   
})

app.post('/',(req,res)=>{
    console.log(req.body);
        const username=req.body.username;
    const message=req.body.message;
fs.writeFile("username.txt",` --${username}:${message}  -------  `,{flag:'a'},(err)=>{
    if(err){
        console.log(err)
    }
    // console.log("Your file create successfully");
    res.redirect('/');  
})

 
})





// console.log(__dirname)
app.get('/login',(req,res)=>{
    res.send(`
    <form action="/login" method="post" onSubmit="localStorage.setItem('username',document.getElementById('username').value)">
    
  
    <input type="text" name="name" id="username" placeholder="enter username">
    
  
     <button type="submit">add</button>
    
    </form>`);



})

app.post('/login',(req,res)=>{
res.redirect('/');   
})







app.listen(8000, (req, res) => {
    console.log("server is working  on this port " + 8000);

})