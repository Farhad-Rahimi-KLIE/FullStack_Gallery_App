const express = require("express");
const CategoryController = require("../Controller/CategoryControler");
const GalleryController = require("../Controller/GalleryController");
const router = express.Router();
const upload = require("../Middlewares/Image");
// const checkuserauthecated = require('../Middlewares/authMiddlewares');


// Category Routes
router.post("/addcategory", CategoryController.AddCategory);
router.get("/getcategory", CategoryController.getCategory);

// Images Routes
router.post("/addimage", upload.single("image"), GalleryController.addImage);
router.get("/getallimage", GalleryController.getAllImage);
router.get("/getsigleimage", GalleryController.getSingleImage);


module.exports = router;