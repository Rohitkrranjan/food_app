const express = require('express');
const cors = require("cors")
require("./db/dbConnection");
const User = require("./db/userSchema");
const Product = require("./db/product")
const Staff = require("./db/staff")
const Admin = require("./db/admin")

const PORT =7000;
const app = express();
app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello .........");
})

app.post("/register",async(req,res)=>{
    const user = new User(req.body)
    const result = await user.save();
    res.send(result);
    // console.log(result);
})
// admin register
app.post("/admin",async(req,res)=>{
    const user = new Admin(req.body)
    const result = await user.save();
    res.send(result);
    // console.log(result);
})

// admin login


// api for login

app.post("/admin-login",async(req,res)=>{
    let user = await Admin.findOne(req.body).select("-password");
    if(user)
    {
        res.send(user)
    }
    else{
        res.send("user not found !")
    }
})

app.post("/login",async(req,res)=>{
    let user = await User.findOne(req.body).select("-password");
    if(user)
    {
        res.send(user)
    }
    else{
        res.send("user not found !")
    }
})

app.post("/addproduct",async(req,res)=>{
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
    // console.log(result);
})

// API for list all data

app.get("/products",async(req,res)=>{
    const products = await Product.find();

    if(products.length > 0)
    {
        res.send(products)
    }
    else
    {
        res.send("data is not found...");
    }
    // console.log(products);
})

app.get("/admin",async(req,res)=>{
    const product = await Product.find();
    
})

// delete API
app.delete("/products/:id",async(req,res)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    res.send(result);
})

app.get("/products/:id",async(req,res)=>{
    const result = await Product.findOne({_id:req.params.id});

    if(result)
    {
        res.send(result);
    }
    else{
        res.send("data is not found");
    }

})

// Api for staffs

 app.post("/staff",async(req,res)=>{
    const staff = new Staff(req.body);
    const data = await staff.save();
    res.send(data);
    // console.log(data);
 })

 app.get("/list",async(req,res)=>{
    const data = await Staff.find();

    if(data.length > 0)
    {
        res.send(data)
    }
    else
    {
        res.send("data is not found...");
    }
    // console.log(data);
})

//  Api for update product

app.put("/products/:id",async(req,res)=>{
    const updateData = await Product.updateOne({_id:req.params.id},{$set:req.body});
    res.send(updateData);
})

app.listen(PORT,()=>{
    console.log(`server is running at the port number ${PORT}...`);
})