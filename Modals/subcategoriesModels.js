const {Schema , model} = require('mongoose')
const subcategoriesSchema = new Schema({
    title: { type: String, required: true },
    categories: [{ type: Schema.Types.ObjectId,
                     ref: 'Category' }],
},{
    timestamps:true
})

module.exports = model('Subcategory', subcategoriesSchema)