import { Component } from "react";



export default class Contador extends Component { 

    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }

    constructor(props) {
        super(props)

        this.inc = this.inc.bind(this)
        this.dec = this.dec.bind(this)
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
   
        })
    }

    alterarPasso = (ev) => {
        this.setState({ passo: +ev.target.value})
    }


    renderForm () {
        return (
            <>
                <input type="number" min={1} max={1000} 
                    value={this.state.passo} 
                    onChange={this.alterarPasso}/>
                <button onClick={this.inc}  > + </button>
                <button onClick={this.dec}  > - </button>
            
            </>
        )
    }

    render() {
        return (
            <div>
                <h1>Contador (usando Classe) </h1>
                <h2>{this.props.valorInicial}</h2>
                <h2>{this.state.numero}</h2>
                {this.renderForm()}
            </div> 
        )
    }


}