const { Schema, model } = require('mongoose')
const categoriesSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: false },
    cuisines: [{
        type: Schema.Types.ObjectId,
        ref: 'Cuisine'
    }],
    subcategories:[{
        type: Schema.Types.ObjectId,
        ref: 'Subcategory',
    }]
},{
    timestamps:true
})

module.exports = model('Category', categoriesSchema)