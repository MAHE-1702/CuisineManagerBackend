const Subcategory = require('../Modals/subcategoriesModels')

// Get all subcategories
exports.getAllSubcategories = async (req, res, next) => {
  try {
    const subcategories = await Subcategory.find().populate('categories','title');
    res.status(200).json(subcategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create 
exports.createSubcategory = async (req, res, next) => {
  try {
    const { title, categories } = req.body;
    if (!title || !categories || categories.length === 0) {
      return res.status(400).json({ message: 'Title and categories are required.' });
    }
    const subcategory = new Subcategory({ title, categories });
    await subcategory.save();
    res.status(201).json(subcategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get id
exports.getSubcategoryById = async (req, res) => {
  try {
    const {id} = req.params
    const subcategory = await Subcategory.findById(id).populate('categories');
    if (!subcategory) return res.status(404).json({ error: 'Subcategory not found' });
    res.status(200).json(subcategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update 
exports.updateSubcategory = async (req, res, next) => {
  try {
    const {id} = req.params
    const { title, categories } = req.body;
    const subcategory = await Subcategory.findByIdAndUpdate(id, { title, categories }, { new: true });
    if (!subcategory) return res.status(404).json({ error: 'Subcategory not found' });
    res.status(200).json(subcategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete 
exports.deleteSubcategory = async (req, res) => {
  try {
    const {id} =req.params
    const subcategory = await Subcategory.findByIdAndDelete(id);
    if (!subcategory) return res.status(404).json({ error: 'Subcategory not found' });
    res.status(200).json({ message: 'Subcategory deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
