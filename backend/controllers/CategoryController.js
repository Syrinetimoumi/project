const Category = require('../models/Category');

const addCategory = async (req, res) => {
const { name } = req.body;
try{
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
}catch(error){
    res.status(400).json({error:error.message});
}


}


const getCategories=async (req, res) => {
    try{
        const categories = await Category.find();
        res.status(200).json(categories);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

module.exports = {addCategory,
    getCategories
};