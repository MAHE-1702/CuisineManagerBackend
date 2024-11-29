const   Cuisine = require('../Modals/cuisinesModel')





exports.createCuisine = async(req,res,next)=>{
    try{
        const {title} = req.body;
        const image = req.file? req.file.path : null;
        if (!title || !image) {
          return res.status(400).json({ message: 'Title and image are required.' });
        }
        const cuisine = new Cuisine({title, image})
        await cuisine.save()
        res.status(201).json(cuisine)

    }catch(err){
        res.status(400).json({error:err.message})

    }
}

//getall
exports.getAllCuisines = async (req, res) => {
    try {
      const cuisines = await Cuisine.find();
      res.status(200).json(cuisines);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  //getcuisinesbyid

  exports.getCuisineById = async (req, res,next) => {
    try {
        const {id} = req.params
      const cuisine = await Cuisine.findById(id);
      if (!cuisine) return res.status(404).json({ error: 'Cuisine not found' });
      res.status(200).json(cuisine);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  //update

  exports.updateCuisine = async (req, res, next) => {
    try {
      const { title, image } = req.body;
      const {id} = req.params
      const cuisine = await Cuisine.findByIdAndUpdate(id, { title, image }, { new: true });
      if (!cuisine) return res.status(404).json({ error: 'Cuisine not found' });
      res.status(200).json(cuisine);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  //delete

  exports.deleteCuisine = async (req, res, next) =>{
    try{
        const {id} = req.params
        const deletedCuisine = await Cuisine.findByIdAndDelete(id)
        if(!deletedCuisine){
            res.status(404).json({error:"cuisine not found"})
        }
        return res.status(200).json({message:"Cuisine deleted Successfully"})
    }catch(error){
        res.status(500).json({error:"error.message"})
    }
  }
