const dotenv = require("dotenv").config();
const express = require ("express");
const mongoose = require("mongoose");
const path = require("path")
const bodyParser = require('body-parser')
const cors = require ('cors')


const blogsRouter = require('./routes/blogsRoutes')

const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))


app.use('/blogs', blogsRouter);
app.get('/*',(req,res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err))

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
