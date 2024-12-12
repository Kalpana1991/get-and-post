const ex=require('express')
const app=ex();
app.use(ex.json());

app.get('/name' , (req,res)=>{
    res.send('my name is kalpana')
})

app.post('/student1' , (req,res)=>{
    console.log(req.body);
    res.send('reciving ur data')
})
app.post('/student2' , (req,res)=>{
    console.log(req.body);
    res.send('reciving ur data')
})







app.listen(4000)