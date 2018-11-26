let ex = [
    {
        "id": 1,
        "intensity": "high",
        "duration": "41",
        "date": "11/21/2018",
        "time": "10:15pm"
    }, {
        "id": 2,
        "intensity": "low",
        "duration": "48",
        "date": "11/22/2018",
        "time": "2:25 am"
    },

    {
        "id": 3,
        "intensity": "med",
        "duration": "12",
        "date": "11/23/2018",
        "time": "5:34 pm"
    },
    {
        "id": 4,
        "intensity": "low",
        "duration": "12",
        "date": "11/23/2018",
        "time": "10:15pm"
    }
]
let cal = [{
    "id": 5,
    "calories": "400",
    "date": "11/24/2018",
    "time": "8:52 am"
},
{
    "id": 6,
    "calories": "45165161",
    "date": "11/26/2018",
    "time": "11:06am"
},
{
    "id": 7,
    "calories": "45165161",
    "date": "11/26/2018",
    "time": "11:06am"
},
{
    "id": 8,
    "calories": "45165161",
    "date": "11/26/2018",
    "time": "11:06am"
}]
let datedObj = [{
    "id": "11/26/2018",
    "duration": "12",
    "calories": "45165161"    
}]
let id = 9
// functions for date and time keys to display nicely
var newDate = function () {
    let date = new Date();
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
}
var newTime = function () {
    let date = new Date()
    if (date.getMinutes() <= 9) { var minutes = '0' + date.getMinutes() }
    else { minutes = date.getMinutes() }
    if (date.getHours() === 0) {
        return 12 + ':' + `${minutes}am`
    }
    else if (date.getHours() <= 12) {
        return date.getHours() + ':' + `${minutes}am`
    }
    else { return (date.getHours() - 12) + ':' + `${minutes}pm` }
    // Take spaces out of am pm? maybe?
}
//all modules for server page
module.exports = {
    readCal: (req, res) => {
        res.status(200).send(cal)

    },
    readEx: (req, res) => {
        res.status(200).send(ex)
    },
    createCal: (req, res) => {
        // console.log(req.params)
        let { cals } = req.params
        let newCal = {
            id: id,
            calories: cals,
            date: newDate(),
            time: newTime()
        }
        id++;
        cal.push(newCal)
        res.status(200).send(cal)
    },
    createEx: (req, res) => {
        let { intensity, duration } = req.params;
        let newEx = {
            id: id,
            intensity: intensity,
            duration: duration,
            date: newDate(),
            time: newTime()
        }
        id++;
        ex.push(newEx)
        res.status(200).send(ex);
    },
    putCal: (req, res) => {
        const { calories } = req.body;
        let calID = req.params.id;
        const calIndex = cal.findIndex(cal => cal.id == calID)
        let calUpdate = cal[calIndex]
        cal[calIndex] = {
            id: calUpdate.id,
            calories: calories,
            date: calUpdate.date,
            time: calUpdate.time
        }
        // console.log(req.body)
        // console.log(req.params)
        console.log(cal)
        res.status(200).send(cal)
    },
    putEx: (req, res) => {
        const { duration, intensity } = req.body;
        
        let exID = req.params.id;
        const exIndex = ex.findIndex(ex => ex.id == exID)
        let exUpdate = ex[exIndex]
        ex[exIndex] = {
            id: exUpdate.id,
            duration: duration,
            intensity: intensity,
            date: exUpdate.date,
            time: exUpdate.time
        }
        res.status(200).send(ex)
        // console.log(2)
    },
    deleteCal: (req, res) => {
        const toDelete = req.params.id;
        
        calIndex = cal.findIndex(cal => cal.id == toDelete);
        cal.splice(calIndex, 1)
        
        res.status(200).send(cal);
    },
    deleteEx: (req, res) => {
        console.log(req.params)
        const toDelete = req.params.id;
        exIndex = ex.findIndex(ex => ex.id == toDelete)
        ex.splice(exIndex, 1)
        res.status(200).send(ex);
    },
    putDatedObj: (req, res) => {
        datedObj = req
        res.status(200).send(datedObj)
}
    }  