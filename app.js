const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let items=['Buy Food','Cook Food','Cook Food'];
let workItems=[];
app.set("view engine",'ejs');
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function() {
  console.log('server started on port 3000');
});

app.get('/',function(req,res) {
  let today = new Date();
  let options = {
    weekday:'long',
    day:'numeric',
    month:'long'
  };
  let day = today.toLocaleDateString('en-US',options);

  res.render('list',{listTitle:day,listItems:items});
});

app.post('/',function(req,res) {
  let item = req.body.newItem;
  if(req.body.button==='Work') {
    workItems.push(item);
    res.redirect('/work');

  } else {
  items.push(item);
  res.redirect('/');
  }
});
app.get('/work',function(req,res) {
  res.render('list',{listTitle:'Work List',listItems:workItems});

});

app.get('/about',function (req,res) {
  res.render('about');
});
