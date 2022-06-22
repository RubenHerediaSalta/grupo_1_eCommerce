const path = require('path');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'public/images/products');
    },
    filename: (req,file,cb)=>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
let uploadProduct = multer({storage: storage});

module.exports = uploadProduct