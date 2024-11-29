const {Router} = require('express')
const router = Router()

const {createCuisine, getAllCuisines , getCuisineById,updateCuisine, deleteCuisine} = require('../Controllers/cuisinesController')
const upload = require('../upload')

router.post('/create', upload.single('image') ,createCuisine)
router.get('/getall',getAllCuisines)
router.get('/getcuisine/:id',getCuisineById)
router.put('/update/:id',updateCuisine)
router.post('/delete/:id',deleteCuisine)

module.exports = router