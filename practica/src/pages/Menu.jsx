import {Outlet,Link} from "react-router-dom"

export default function Menu()
{
    return(
        <div className="padre">
            <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/carrusel">Carrusel</Link>
                </li>
                <li>
                    <Link to="/acordeon">ACORDEON</Link>
                </li>
                <li>
                    <Link to="/card">CARD</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet/>
        </div>
    );
}