const multer = require("multer")

var str = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(__filename, '../cliV2/public/uploads')
    },
    filename : function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})

const upload = multer({storage : str})

module.exports = {upload}