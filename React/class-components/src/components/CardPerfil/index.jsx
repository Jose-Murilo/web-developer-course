import './style.css'
import React from 'react'

// Funcional

// export function CardPerfil({login, name, age}) {
//     return(
//         <div className="containerCard">
//             <img src={`https://github.com/${login}.png`} alt="image-user" />
//             <p>Nome: {name}</p>
//             <p>Idade: {age}</p>
//         </div>
//     )
// }


// com Class
export class CardPerfil extends React.Component {
    render() {
        return (
            <div className="containerCard">
                <img src={`https://github.com/${this.props.login}.png`} alt="image-user" />
                <p>Nome: {this.props.name}</p>
                <p>Idade: {this.props.age}</p>
            </div>
        )
    }
}