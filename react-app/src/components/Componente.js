import React, {Component} from "react";

const Componente = props => <h2>{props.msg}</h2>    //Componente basado en arrow function


/* function Componente(props){      //Componente funcional
    return <h2>{props.msg}</h2>
}
 */

/* class Componente extends Component{  //Componente basado en clase
    render(){
        return <h2>{this.props.msg}</h2>;
    }
} */

export default Componente;
