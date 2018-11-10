import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Step3 extends Component {
    constructor(){
        super()
        this.state={
            mortgage: '',
            rent:''
        }
    
    this.handleInputChange=this.handleInputChange.bind(this)
    }


    handleInputChange(e){
        this.setState({morgage: e.target.value,
            rent: e.target.value
        })
    }
    
    render(){
        let {mortgage, rent} = this.state
        return(
            <div>
                 <Header />
                 <input value={mortgage}onChange={this.handleInputChange('mortgage')}>Monthly Mortgage Amount</input>
                 <input value={rent}onChange={this.handleInputChange('rent')}>Desired Monthly Rent</input>
                 <button onClick={this.addProperty}>Complete</button>

            </div>
        )
    }
}

export default Step3