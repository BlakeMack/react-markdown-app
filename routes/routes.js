const express = require('express');
const bodyParser = require("body-parser");

const router = express.Router()
const Model = require('../models/model');

router.use(bodyParser.json());

//Post Method
router.post('/post', async (req, res) => {
  const data = new Model({
      name: req.body.name,
      text: req.body.text
  })

  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

//Get all Method
router.get('/getAll', async (req, res) => {
  try{
      const data = await Model.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

//Get by ID Method
// already have get one logic with react dom, consider commenting out
router.get('/getOne/:id', async (req, res) => {
  try{
      const data = await Model.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})


//Update by NAME Method
router.patch('/update/:name', async (req, res) => {
  try {
      const name = req.params.name;
      console.log("Updating file with name: ", name);
      const updatedData = req.body;
      const options = { new: true };

      const result = await Model.findOneAndUpdate(
          {name: name}, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id)
      res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

module.exports = router;
