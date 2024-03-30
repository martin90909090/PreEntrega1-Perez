import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import SuperIndex from "../SuperIndex/SuperIndex";

const NavBar = () => {
    const[count,] = useState(1);    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <a className="navbar-brand" href="#" style={{marginLeft:'50px'}}>
                <img src="src/assets/img/qTronicsLogo.png" alt="brandLogo" style={{height: '100px', width: 'auto'}} />
                <span className="navbar-brand mb-0 h1" style={{fontSize:'45px'}}>QuantumTronics</span>
            </a>
            <button className="navbar-toggler" type="button" 
            data-toggle="collapse" data-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" 
            aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent:'flex-end', flexGrow:'1', marginRight:'50px'}}>
                <ul className="navbar-nav" style={{marginRight:'50px', fontSize:'25px', gap:'30px'}}>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categorías</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
                <a className="nav-link" href="#" style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                    <CartWidget />
                    <SuperIndex count={count} />
                </a>
            </div>
        </nav>
    );
}

export default NavBar;