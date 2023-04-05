const multer = require("multer");
const storage = multer.diskStorage({
    destination:function(req,res,cb){
        return cb(null, './public');
    },
    filename: function (req,file,cb) {
        return cb(null, 'myFile.jpg');
    },
});

const upload = multer({storage});

app.post("/upload",upload.single("myFile"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    res.send("File uploded Sucessfully");
})