const router = require('express').Router();
const Plants = require('./plants-model');


router.get('/', (req, res) => {
    res.send('getting some plants')
});

router.get('/:id', (req, res) => {
    res.send('getting plant id')
});

router.post('/', (req, res) => {
    res.send('creating new plant post')
});

router.put('/:id', (req, res) => {
    try{
        if(exists){
            res.send('New plant created')
         }else { 
             res.status(404).json({
                 message: 'Could not find plant with ID'
             })
         }
            
    }catch (error) {
        res.status(500).json({ message: 'Failed to update'})

    }
});

router.delete('/:id', async(req, res) => {
    try{
        await remove(id)
        res.json({ message: 'Plant deleted' })
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete plant'})
    }
});

module.exports = router;