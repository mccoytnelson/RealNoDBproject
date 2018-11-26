import React, { Component } from 'react'
import axios from 'axios'


let dateArray = []
let dates
export default class MainColumn extends Component {
    constructor() {

        super();
        this.state = {
            exInfo: [],
            calInfo: [],

        }

    }




    componentDidMount() {
        axios.get('/api/exercise').then(info => {
            this.setState({ exInfo: info.data })
        });
        axios.get('/api/calories').then(info => {
            this.setState({ calInfo: info.data })
        });

    }
    arrSorter() {
        let uniqueArray = []
        let { calInfo, exInfo } = this.state
        dates = calInfo.concat(exInfo).map(e => e.date);
        uniqueArray = Array.from(new Set(dates))
        dateArray = uniqueArray.map((e) => { let obj = { id: e}; return obj })
        // dateArray.forEach((e)=>{if(e.id === calInfo.date){e.calories = calInfo.calories}})
        // axios.put(`/api/dateObj`, {datedObj})
        // .then(res=>axios.get('/api/datedObj').then(info=>this.setState({datedObj: info.data})))
    }
    // arrFinalizer() {
    //     let { calInfo, exInfo } = this.state
    //     dates = calInfo.concat(exInfo)
    //     dates.forEach(element => {
    //         calInfo.forEach((e) => { if (e.date == dateArray[].id)})
    //         // exInfo.forEach()
    //     });
    // }



    render() {
        this.arrSorter()
        // this.arrFinalizer()
        let mappedObj = (<h3>Nothing?</h3>)
        if (dateArray[0]) {
            mappedObj = dateArray.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.id}  {item.duration} {item.calories}</h2>
                    </div>

                )
            })
        }
        return (
            <div>
                <h2>Days With Records</h2>
                {mappedObj}
            </div>
        )
    }
}

