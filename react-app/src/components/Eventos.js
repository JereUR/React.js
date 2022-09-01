import React, {Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador:0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e){
        console.log("Sumando");
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar(e){
        console.log("Restando");
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.restar}>-</button>
                    <button onClick={this.sumar}>+</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

//Properties Initializer
export class EventosES7 extends Component{
 
    state = {
        contador:0,
    };

    //Arrow functions
    sumar= (e) => {
        console.log("Sumando");
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar = (e) => {
        console.log("Restando");
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.restar}>-</button>
                    <button onClick={this.sumar}>+</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

function Boton (props){
    return <button onClick={(props.myOnClick)}>Boton hecho componente</button>;
}

/* const Boton = (props) => {
    <button onClick={(props.myOnClick)}>Boton hecho componente</button>;
}
 */

/* const Boton = ({myOnClick}) => {
    <button onClick={myOnClick}>Boton hecho componente</button>
} */

export class MasSobreEventos extends Component{
    handleClick = (e, msg) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(msg);
    }

    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick = {(e) => 
                    this.handleClick(e, "Hola pasando parámetro desde un evento")}
                >
                    Saludar
                </button>
                {/* Evento Personalizado */}
                {/* <Boton onClick = {(e) => 
                    this.handleClick(e, "Hola pasando parámetro desde un evento")}>
                </Boton> */}
                <Boton myOnClick = {(e) => 
                    this.handleClick(e, "Hola pasando parámetro desde un evento")}>
                </Boton>
            </div>
        );
    }
}