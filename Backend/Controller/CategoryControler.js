const Category = require("../Models/Category")
class CategoryController {
static AddCategory = async (req, res)=>{
    const {name} = req.body;
    try {
        if (name) {
            const addcategory = await Category.create({
                name : name,
            })
            if (addcategory) {
        return res.status(200).json({message : "Category added Successfull", addcategory})                
            }
        } else {
        return res.status(400).json({message : "All Fields Required"})
        }
    } catch (error) {
        return res.status(400).json({message : error.message})
    }
}
static getCategory = async (req, res)=>{
    try {
        const getcategory = await Category.find({});
        if (getcategory) {
            return res.status(200).json({message : "Categories Fetch it", getcategory})
        }
    } catch (error) {
        return res.status(400).json({message : error.message})
    }
}
}

module.exports = CategoryController;