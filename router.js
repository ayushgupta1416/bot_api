const express = require('express')
const router = express.Router()
const TrainDetail = require('./models')

router.get('/', async(req,res) => {
    try{
        const trainDetails = await TrainDetail.find()
        res.send(trainDetails)
    }catch(err) {
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const trainDetails = new TrainDetail({
        source: req.body.source,
        destination: req.body.destination,
        departure_date: req.body.departure_date,
        price: req.body.price,
        img_url: req.body.img_url
    })

    try{
        const a1 = await trainDetails.save()
        res.send(a1)
    }catch(err){
        res.send('Error ' + err)
  }
})

module.exports = router