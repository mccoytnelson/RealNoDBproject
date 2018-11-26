import React, { Component } from 'react'
import ImgButton from './button'
export default class RenderCalDisplay extends Component {
    constructor(){
        super()
        this.state={
            calories: ''
        }
    }

    render() {
        console.log(this.state)
        let showDiv = () => { document.getElementById("myDropdown2").classList.toggle("show"); }
        let { calinfo, deleteCal, putCal } = this.props
        
        let mappedCal = (<h3>Must be famine!</h3>)
        if (calinfo[0]) {
            mappedCal = calinfo.map((item) => {
                console.log(item)
                return (
                    <div key={item.id}>
                        <ImgButton deleter={deleteCal} id={item.id} changer={putCal} input={this.state.calories}/>
                        <h2>
                            {/* <div class='edit' onClick={() => { showDiv() }} /> */}
                            <div class='timeStamp'>{item.date} {item.time}</div>
                            {'Calories: ' + item.calories}

                        </h2>

                    </div>

                )
            })
        }
        return (
            <div>
                <input onChange={event => { this.setState({calories: event.target.value})}} />
                {mappedCal}
            </div>
        )
    }
}
