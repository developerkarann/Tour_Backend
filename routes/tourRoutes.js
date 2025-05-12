const express = require('express')
const { getTour, createTour, updateTour, deleteTour } = require('../controllers/tourController')

const router = express.Router()

router.route('/').get(getTour)// Get all tour

router.route('/').post(createTour) // Create new tour
router.route('/:id').put(updateTour) // Update tour
router.route('/:id').delete(deleteTour) // Delete Tour



module.exports = router