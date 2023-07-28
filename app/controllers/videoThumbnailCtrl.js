const { videoThumbnailList } = require('../services/videoThumbnailSvc')

module.exports = {

    videoThumbnailList(req,res) {
        videoThumbnailList(req).then(data => {
            if(data.response) {
                res.status(data.response).json({
                    msg: data.message,
                    error: data.error
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    data
                })
            }
        }).catch(error => {
            res.status(400).json({
                error: error.message
            })
        })
    }
}