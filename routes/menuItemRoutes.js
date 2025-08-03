const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

router.post('/', async (req, res) => {
    try {
        console.log('Incoming menu data:', req.body);  // 👈 Add this
        const newMenuData = req.body;
        const menuData = new MenuItem(newMenuData);
        const savedMenu = await menuData.save();
        console.log('Saved menu to database');
        console.log(savedMenu);
        res.status(201).json(savedMenu);
    } catch (error) {
        console.error('Error saving menu:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched')
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching menu:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:tasteType', async(req,res) => {
    try{
        const tasteType = req.params.tasteType; // Extract the tasteType from url parameters
        if(tasteType ==='sweet' || tasteType ==='spicy'|| tasteType ==='sour'){
            const response = await MenuItem.find({taste:tasteType});
            console.log("response fetched");
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }catch(err){
       console.log(err);
       res.status(500),json({error:'Internal server error'})
    }
})

module.exports = router;