import './style.css'

export function CardPerfil({login, name, age}) {
    return(
        <div className="containerCard">
            <img src={`https://github.com/${login}.png`} alt="image-user" />
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
        </div>
    )
}