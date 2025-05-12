const mongose = require('mongoose')

const tourSchema = new mongose.Schema({
    tourId: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    pick_up: {
        type: String,
    },  
    meeting_point: {
        type: String,
    },
    drop_off: {
        type: String,
    },
    duration: {
        type: Number,
    },

    duration_unit: {
        type: String,
    },
})

module.exports = mongose.model('Tour', tourSchema)