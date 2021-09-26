import multer from 'multer';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './storage/imgs')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}.png`)
    }
  })
  
 export const upload = multer({ storage })


  