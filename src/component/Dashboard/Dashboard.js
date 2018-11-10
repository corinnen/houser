import React, {Component} from 'react'
import House from "../House/House";
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            listings: []
        }

    render(){
        let listDisplay = listings.map((item, i) =>{
            return <h2 key={i}>{item}</h2>
          })
        return(
            <div>Dashboard
                <button ><Link to='/wizard' /> Add New Property</button>
                {listDisplay}
            </div>

        )
    }
}

export default Dashboard