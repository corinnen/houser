import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

class Step1 extends Component {
    constructor(){
        super()
        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    this.handleInputChange=this.handleInputChange.bind(this)
    }


    handleInputChange(e){
        this.setState({name: e.target.value,
            address: e.target.value,
            city: e.target.value,
            state: e.target.value,
            zip: e.target.value
        })
    }
    addProperty = () => {
        let {name, address, city, state, zip} = this.state
        axios.post('/api/', {name, address, city, state, zip}).then(response => {
            this.setState({
                name: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            })
        })
    }


    render(){
        let {name, address, city, state, zip} = this.state
        return(
            <div>
                <Header />
                <input value={name}onChange={this.handleInputChange('name')}>Property Name</input>
                <input value={address}onChange={this.handleInputChange('address')}>Address</input>
                <input value={city}onChange={this.handleInputChange('city')}>City</input>
                <input value={state}onChange={this.handleInputChange('state')}>State</input>
                <input value={zip}onChange={this.handleInputChange('zip')}>Zip</input>
                <button onClick={this.addProperty}>Next Step</button>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
    step1: state.step1
    }
}

export default connect(mapStateToProps, Step1