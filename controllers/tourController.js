const Tour = require('../schema/tour')


exports.getTour = async (req, res, next) => {
    const tours = await Tour.find();

    res.status(200).json({
        success: true,
        tours
    })
}

exports.createTour = async (req, res, next) => {
    const { tourId, title, description, pick_up, meeting_point, drop_off, duration, duration_unit } = req.body;
    if (!tourId || !title || !description || !pick_up || !meeting_point || !drop_off || !duration || !duration_unit) {
        res.status(422).json({
            status: 'error',
            message: 'Please fill all the detail'
        })
    }
    try {
        const tour = await Tour.create({
            tourId, title, description, pick_up, meeting_point, drop_off, duration, duration_unit
        })

        res.status(201).json({
            sucess: true,
            data: tour,
            message: 'Tour created!'
        })
    } catch (error) {
        res.status(422).json({
            error: error.message,
            message: 'Getting error while creating tour'

        })
    }
}

exports.updateTour = async (req, res, next) => {

    try {
        const newTour = {
            tourId: req.body.tourId,
            title: req.body.title,
            description: req.body.description,
            pick_up: req.body.pick_up,
            meeting_point: req.body.meeting_point,
            drop_off: req.body.drop_off,
            duration: req.body.duration,
            duration_unit: req.body.duration_unit
        }

        const tour = await Tour.findByIdAndUpdate(req.params.id, newTour, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })

        res.status(200).json({
            sucess: true,
            message: 'Tour updated!',
            data: tour
        })
    } catch (error) {
        res.status(422).json({
            error: error.message,
            message: 'Getting error while Updating tour'

        })
    }

}

exports.deleteTour = async (req, res, next) => {

    try {
        const tour = await Tour.findByIdAndDelete(req.params.id)

        res.status(200).json({
            sucess: true,
            message:    `${tour.title} deleted!`,
        })
    } catch (error) {
        res.status(422).json({
            error: error.message,
            message: 'Getting error while deleting tour'

        })
    }

}

