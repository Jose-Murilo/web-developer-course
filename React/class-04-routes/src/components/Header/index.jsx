import { Link, NavLink } from "react-router-dom"
import "./style.css"
import reactLogo from '../../assets/react.svg'

export function Header() {
    return (
        <>
            <header>
                <div className="containerLogo">
                    <Link to={"/"}>
                        <img src={reactLogo} alt="icon" />
                    </Link>
                    <h1>Class Routes</h1>
                </div>

                    <nav>
                        <ul>
                            <NavLink className={(NavLink) => NavLink.isActive ? 'active' : ''} to={"/"}>
                                <li>Home</li>
                            </NavLink>

                            <NavLink to={"/gallery"}>
                                <li>Galeria</li>
                            </NavLink>

                            <NavLink to={"/contact"}>
                                <li>Contato</li>
                            </NavLink>
                        </ul>
                    </nav>
            </header>
        </>
    )
}