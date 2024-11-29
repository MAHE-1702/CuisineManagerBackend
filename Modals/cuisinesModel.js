const {Schema , model} = require('mongoose')
const cuisineSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: false },
},{
    timestamps:true
})

module.exports = model('Cuisine', cuisineSchema)