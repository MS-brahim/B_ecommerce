const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(file, '../cliV2/public/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    }
});
const uploadImage = multer({
    storage: storage,
    limits: {
      fileSize: 600000,
    },
    fileFilter(req, file, callback) {
      if (file.mimetype === "image/png" || "image/jpg") {
        callback(null, true);
      } else {
        callback(new Error("Please upload an image."));
      }
    },
})

module.exports = {uploadImage}