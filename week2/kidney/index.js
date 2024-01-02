const express = require('express')
const bodyparser = require('body-parser');
const port = 3000
const app = express();
const users = [{name: "John",
  Kidneys: [{
    healthy: false
  }]
}];
app.use(bodyparser.json());
app.get('/',(req,res)=>{
  const johnKidneys = users[0].Kidneys;
  const numberofkidneys = johnKidneys.length;
  let noofhkidney =0;
  for(let i=0;i<johnKidneys.length;i++){
    if(johnKidneys[i].healthy){
        noofhkidney = noofhkidney+1;
    }
  }
  const noofuhkidney = numberofkidneys - noofhkidney;
  res.json({
    johnKidneys,
    noofhkidney,
    noofuhkidney
  })
})

app.post("/",function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].Kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg:"Done!"
    })
})
app.put("/",function(req,res){
    for(let i=0;i<users[0].Kidneys.length;i++){
        users[0].Kidneys[i].healthy= true;
    }
    res.json({});
})
app.delete("/",function(req,res){
    if(isthereatleastoneunhealthykidney()){
    const newkidneys =[];
    for(let i=0;i<users[0].Kidneys.length;i++){
       if (users[0].Kidneys[i].healthy= true){
          newkidneys.push({
            healthy: true
          })
       }
    }
    users[0].kidneys = newkidneys;
    res.json({msg: "done"})
}else{
    res.status(411).json({
        msg:"You have no bad kidneys"
    });
}
})
function isthereatleastoneunhealthykidney(){
    let atleast =false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleast = true;
        }
    }
    return atleast;
}
app.listen(port,()=>{
    console.log('Example app listening on port ${port}')
})