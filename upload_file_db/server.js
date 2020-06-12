const express = require('express');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const crypto = require('crypto');

dotenv.config();

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

//create connection with DB
const dbOptions = { 
    useUnifiedTopology: true , 
    useNewUrlParser: true , 
    useCreateIndex: true};

let gfs = null;   //gridfs stream 
const conn = mongoose.createConnection(process.env.DB_URI , dbOptions );
conn.once('open',  () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads')
})

//creating storage
let storage = new GridFsStorage({
    url: process.env.DB_URI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });

//upload any kind of files
app.post('/upload', upload.single('file'),(req,res)=>{
    res.json({ uploadedFile : req.file });
});

//retrive all files metadata i.e uploads.files
app.get('/all', (req, res)=>{
  console.log("req recieved");
  gfs.files.find().toArray( (err,files)=>{
    if(err)
    {
      res.status(401).json({ err : "No such  file exists" });
    }
    else
    {
      files.map(file=>{
        if( file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === "image/gif")
        {
          file.isImage = true;
        }
        else
        {
          file.isImage = false;
        }
      });
      res.status(201).json(files);
    }
  })
}); 

//for find by id is not working
//retrive a single file metadata
app.get('/file/:id' , (req, res)=>{
  gfs.findOne({ _id : id }, (err, file)=>{
    if(!file || file.length === 0)
    {
      res.status(401).json({ err : "No such file exist "});
    }
    else if(err)
    {
      res.status(401).json({ err : err });
    }
    else
    {
      res.status(201).json(file);
    }
  })
}); 

//retrive a single picture (not metadata but uploads.chunks)
app.get('/picture/:filename' , (req, res)=>{
  
  gfs.files.findOne({ filename : req.params.filename }, (err, file)=>{
    
    if(!file || file.length === 0)
    {
      console.log("error null");
      res.status(401).json({ err : "No such file exist "});
    }
    else if(err)
    {
      res.status(401).json({ err : err });
    }
    
    else{
    if( file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === "image/gif")
    {
      const readstream = gfs.createReadStream({ filename : file.filename });
      readstream.pipe(res);
    }
    else
    {
      res.status(401).json({ err : "its not a imgage/jpeg or image/png type "});
    }}
    
  });
}); 

app.listen(PORT,()=>{
    console.log(`server is active at ${PORT}`);
});