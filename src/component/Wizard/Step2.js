import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Step2 extends Component {
    constructor(){
        super()
        this.state={
            img: '',
        }
    
    this.handleInputChange=this.handleInputChange.bind(this)
    }


    handleInputChange(e){
        this.setState({img: e.target.value
        })
    }
    
    render(){
        let {img} = this.state
        return(
            <div>
                <Header />
                 <input value={img}onChange={this.handleInputChange('img')}>Image URL</input>
                 <button onClick={this.addProperty}>Previous</button>
                 <button onClick={this.addProperty}>Next Step</button>

            </div>
        )
    }
}

export default Step2