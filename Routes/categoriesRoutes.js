const {Router} = require('express')
const router = Router()

const {createCategory, getAllCategories, getCategoryById,updateCategory,deleteCategory} = require('../Controllers/categoriesController')
const upload = require('../upload')

router.post('/create', upload.single('image'), createCategory)
router.get('/getall',getAllCategories)
router.get('/getcuisine/:id',getCategoryById)
router.put('/update/:id',updateCategory)
router.post('/delete/:id',deleteCategory)

module.exports = router