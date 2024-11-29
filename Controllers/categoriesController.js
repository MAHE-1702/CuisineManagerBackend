const Category = require('../Modals/categoriesModels');


exports.getAllCategories = async (req, res, next) => {
  try {
   
    const categories = await Category.find()
      .populate('cuisines', 'title')    
      .populate('subcategories', 'title'); 

    
    res.status(200).json(categories.map(category => ({
      _id: category._id,
      title: category.title,
      image: category.image,
      cuisines: category.cuisines || [],  
      subcategories: category.subcategories || []  
    })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.createCategory = async (req, res) => {
  try {
    const { title, cuisines, subcategories } = req.body;
    const image = req.file ? req.file.path : null;

    
    const cuisinesArray = cuisines ? JSON.parse(cuisines) : [];
    const subcategoriesArray = subcategories ? JSON.parse(subcategories) : [];

    
    if (!title || !image || cuisinesArray.length === 0) {
      return res.status(400).json({ message: 'Title, image, and cuisines are required.' });
    }

    
    const newCategory = new Category({
      title,
      image,
      cuisines: cuisinesArray,
      subcategories: subcategoriesArray,
    });
    const savedCategory = await newCategory.save();

    
    const category = await Category.findById(savedCategory._id)
      .populate('cuisines', 'title')
      .populate('subcategories', 'title');

    
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



exports.getCategoryById = async (req, res, next) => {
  try {
    const {id} = req.params
    const category = await Category.findById(id).populate('cuisines');
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateCategory = async (req, res, next) => {
  try {
    const {id} = req.params
    const { title, image, cuisines } = req.body;
    const category = await Category.findByIdAndUpdate(id, { title, image, cuisines }, { new: true });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const {id} = req.params
    const category = await Category.findByIdAndDelete(id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
