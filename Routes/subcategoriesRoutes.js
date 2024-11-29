const {Router} = require('express')
const router = Router()

const {createSubcategory, getAllSubcategories, getSubcategoryById, updateSubcategory, deleteSubcategory} = require('../Controllers/subcategoriesController')
const upload = require('../upload')

router.post('/create', upload.single('image') ,createSubcategory)
router.get('/getall',getAllSubcategories)
router.get('/getsubcategory/:id', getSubcategoryById)
router.put('/update/:id', updateSubcategory)
router.post('/delete/:id',deleteSubcategory)

module.exports = router