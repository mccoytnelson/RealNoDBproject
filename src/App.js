import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
//components
import RenderCalDisplay from './components/renderCalDisplay'
import ExDisplay from './components/ExDisplay'
import MainColumn from './components/MainColumn.js'
//main html unit
class App extends Component {

  constructor() {
    super();
    this.state = {
      exInfo: [],
      calInfo: [],
      calories: '',
      intensity: '',
      minutes: ''

    }
    
  }
  componentDidMount() {
    axios.get('/api/exercise').then(info => {
      this.setState({ exInfo: info.data })
    });
    axios.get('/api/calories').then(info => {
      this.setState({ calInfo: info.data })
    })
  }
  postCal = () => {
    let { calories } = this.state
    if (calories > 0) {
      axios.post(`/api/calories/${calories}`)
        .then(axios.get('/api/calories').then(info => this.setState({ calInfo: info.data })))
    } else {alert('Please enter a number value')}
  }
  postEx = () => {
    let { intensity, minutes } = this.state;
    if( minutes>0){

    axios.post(`/api/exercise/${intensity}/${minutes}`)
      .then(res => { axios.get('/api/exercise').then(info => this.setState({ exInfo : info.data}))})
    } else (alert('Please enter a number value'))
  }
  deleteCal = (id)=>{
    axios.delete(`/api/calories/${id}`)
    .then(results =>{this.setState({calInfo: results.data})})
  }
  deleteEx = (id)=>{
    axios.delete(`/api/exercise/${id}`)
    .then(results =>{
      console.log(results)
      this.setState({exInfo: results.data})})
  }
  putEx = (id, duration, intensity)=>{
    axios.put(`/api/exercise/${id}`, {duration, intensity})
    .then(results=>{this.setState({exInfo: results.data})})
  }
  putCal= (id, calories)=>{
    // console.log(id)
      axios.put(`/api/calories/${id}`, {calories})
      .then(results=>{this.setState({calInfo: results.data})})
      
  }
  render() {

    return (

      <div className="App">
        <div class='header'></div>
        <span>
          <div class='left'>
            <div class='exInput'>
              <input placeholder='Intensity of Workout'
                onChange={event => { this.setState({ intensity: event.target.value }) }} />
              <input placeholder='Duration of Workout(minutes)'
                onChange={event => { this.setState({ minutes: event.target.value }) }} />
              <button onClick={this.postEx}>Add Workout</button></div>
            <div class ='calInput'>
              <input placeholder='Calories of Last Meal'
                onChange={event => { this.setState({ calories: event.target.value }) }} />
              <button onClick={this.postCal}>Add Calories</button>
            </div>
            {/* <div><GoalInput/></div> */}
          </div>
          <div class='middle'><MainColumn/></div>
          <div class='right'>
            <div class='workout'><ExDisplay deleteEx={this.deleteEx} exinfo={this.state.exInfo} putEx={this.putEx}/></div>
            <div class='calories'><RenderCalDisplay putCal={this.putCal} deleteCal={this.deleteCal} calinfo={this.state.calInfo} /></div>
          </div>
        </span>
        <footer></footer>
      </div>
    );
  }
}

export default App;
