module.exports = {

    getTimeNow: (req, res)=>{
        var date = new Date()
        res.status(200).json({
            date: date
        })
    }
}