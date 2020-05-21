const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+'/date.js');
const app = express();

const items=['Buy Food','Cook Food','Cook Food'];
const workItems=[];
app.set("view engine",'ejs');
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function() {
  console.log('server started on port 3000');
});

app.get('/',function(req,res) {

  const day = date.getDate();
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
