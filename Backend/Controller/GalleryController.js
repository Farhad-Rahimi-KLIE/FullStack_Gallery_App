const Gallery = require("../Models/Gallery")
class GalleryController {
    static addImage = async (req, res)=>{
        const {category} = req.body;
        try {
            if (category) {
                const addimage = await Gallery.create({
                    image : req.file.filename,
                    category : category,
                })
                if (category) {
            return res.status(200).json({message : "Image Added Successfully",addimage})
                }
            } else {
            return res.status(400).json({message : "All Fields Required"})
            }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
    static getAllImage = async (req, res)=>{
        try {
        const getAllImage = await Gallery.find({});
        if (getAllImage) {
            return res.status(200).json({message : "All Image Fetch it", getAllImage})
        }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
    static getSingleImage = async (req, res)=>{
        const {category} = req.query;
        try {
            if (category) {
                const getSingleImage = await Gallery.find({category})
                if (category) {
            return res.status(200).json({message : " Sinlge Image Fetch it",getSingleImage})
                }
            } else {
            return res.status(400).json({message : "All Fields Required"})
            }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
}

module.exports = GalleryController;