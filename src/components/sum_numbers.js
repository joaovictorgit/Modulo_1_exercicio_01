import React, {Component} from 'react';
import './sum_numbers.css';


export default class sum_numbers extends Component{
    
    constructor (props){
        super(props);
        
        this.state = {
            number_01: 0,
            number_02: 0,
            result: 0
        }

        this.somar = this.somar.bind(this);
        
    }

    somar(){
        //console.log(this.state.number_01);
        //console.log(this.state.number_02);

        let result = parseInt(this.state.number_01)+ parseInt(this.state.number_02);
        //console.log(result);
        //let result = n1 + n2;
        this.setState({result})

        require('dotenv').config()
        console.log(process.env.REACT_APP_TITLE);
    }

    // Soma de dois números inteiros

    render(){
        require('dotenv').config()
        return (
            <div className="container">
                <h1 className="title">{process.env.REACT_APP_TITLE|| "Erro"}</h1>
                <div className="number01">
                    <input type="number" className="input_numb" onChange={(event) =>{
                        this.setState({number_01:event.target.value})
                    }}></input>
                
                    <input type="number" className="input_numb" onChange={(event) =>{
                        this.setState({number_02:event.target.value})
                    }}></input>
                </div>
                <input type="button" value="+" alt="Add" className="button" onClick={this.somar}>
                
                </input>
                <h2 className="result_sum">{this.state.result}</h2>
            </div>
        )
    }
}