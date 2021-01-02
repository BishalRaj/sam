"use strict";
const express = require("express");
const router = express.Router();
const ExcelModel = require("../model/excelModal");
const CompanyModel = require("../model/companyModel");

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// route for views
router
.get("/", async (req, res) => {

  var company=await CompanyModel.find();
  res.render("index", {
    title: "Sam",
    company:company
  });
})
.get("/all", async (req, res) => {
  var bill=await ExcelModel.find();

  var total=0;
  bill.forEach(element => {
    total=total+element.total
  });

  res.render("all", {
    title: "Sam",
    data:bill,
    total:total
  });
})
.post("/entry",async (req, res) => {
  let {date,bill,particular,item,vatable}=req.body;
  var taxable=0.13*vatable;
 var total=parseInt(taxable)+parseInt(vatable);

  const company=await CompanyModel.find({_id:particular});
  // console.log(company);
  const data = new ExcelModel({
    date:date,
    bill:bill,
    particular:company[0].particular,
    pan:company[0].pan,
    item:item,
    vatable:vatable,
    taxable:taxable,
    total:total
  }); 
console.log(data);
data
.save()
.then((data) => {
  res.redirect('/')
}).catch(err=>{
  res.redirect('/')
})
}).post('/company',(req,res)=>{
  var data =new CompanyModel({
    particular: req.body.company,
    pan: req.body.pan
  })

  data.save().then(()=>{
    res.redirect('/')
  }).catch(err=>console.log(err))
})
module.exports = router;
