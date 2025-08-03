const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

router.post('/', async (req, res) => {
    try {
        const newPersonData = req.body;
        const newPerson = new Person(newPersonData);
        const savedPerson = await newPerson.save();
        console.log('Saved person to database');
        res.status(201).json(savedPerson);
    } catch (error) {
        console.error('Error saving person:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched')
        console.log(data)
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching persons:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:workType', async(req,res) => {
    try{
        const workType = req.params.workType; // Extract the workType from url parameters
        if(workType ==='chef' || workType ==='manager'|| workType ==='waiter'){
            const response = await Person.find({work:workType});
            console.log("response fetched");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }catch(err){
       console.log(err);
       res.status(500).json({error:'Internal server error'})
    }
})

router.put('/:id', async(req,res) => {
    try{
        const personId =  req.params.id;
        const updatePersonData = req.body;
         console.log(personId)

        const response = await Person.findByIdAndUpdate(personId,updatePersonData, {
            new:true, // return updtaed document
            rawValidators:true // Run monngose validation
        })
        console.log(response)
         
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log("data updated");
        res.status(200).json(response);
    }
    catch(err){
       console.log(err);
       res.status(500).json({error:'Internal server error'})
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const personId =  req.params.id;

        const response = await Person.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log("data deleted");
        res.status(200).json({message:"person deletd successfully"});
    }
    catch(err){
       console.log(err);
       res.status(500).json({error:'Internal server error'})
    }
})

module.exports = router;