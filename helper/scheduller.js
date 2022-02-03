const corn = require('node-cron');


corn.schedule('* * * * *', ()=>{
    console.log('fungsi berjalan')
    /*
        const date = new Date();
        await Master_event.findAll()
            .then(events=>{
                events.map(event=>{
                    let statusUpdate = "";
                    if(date===events.date){
                        // sekarang
                        statusUpdate = "Live"
                    }else if(date > events.date){
                        // terlewat
                        statusUpdate = "Completed"
                    }else if(date < events.date){
                        // mendatang
                        statusUpdate = "Upcomming"
                    }

                    Master_event.update({
                        ...events,
                        status = statusUpdate
                    }).catch(err)
                })
            }).catch(err)

    */
})

module.exports = {corn}