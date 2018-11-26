import React, { Component } from 'react'
import ImgButton from './button'
import '../App.css';
export default class ExDisplay extends Component {
    constructor() {
        super()
        this.state = {
            intensity: '',
            duration: ''
        }
    }

    render() {
        let showDiv = () => { document.getElementById("myDropdown").classList.toggle("show"); }

       
        let { exinfo, deleteEx, putEx } = this.props

        let mappedEx = (<h3>Do you even lift bro?</h3>)
        if (exinfo[0]) {
            mappedEx = exinfo.map(item => {
                return (
                    <div key={item.id}>
                        <ImgButton input={this.state.duration} input2={this.state.intensity} deleter={deleteEx} id={item.id} changer={this.props.putEx}/>
                        {/* <div class='edit' onClick={() => { showDiv() }} /> */}
                        <h2><div class='timeStamp'>{item.date} {item.time}</div>
                            <div>{'Intensity: ' + item.intensity} </div>
                            <div>{'Minutes: ' + item.duration}</div>
                            <div id="myDropdown" class="dropdown-content">

                                <button class='b1' onClick={() => { putEx(item.id, this.state.duration, this.state.intensity) }}></button>
                            </div>
                        </h2>
                    </div>
                )
            })
        }
        return (
            <div>
                <input onChange={event => { this.setState({ intensity: event.target.value }) }} />
                <input onChange={event => { this.setState({ duration: event.target.value }) }} />
                {mappedEx}
            </div>
        )
    }
}