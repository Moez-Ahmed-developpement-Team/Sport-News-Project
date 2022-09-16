require ("dotenv").config()
const cloudinary = require('cloudinary').v2
let picture = require ('../admin/src/assets/logo.png')
const uploading=  cloudinary.uploader(picture)
.then ((result)=> console.log(result))
.catch ((error)=> console.log(error))

module.exports =uploading;