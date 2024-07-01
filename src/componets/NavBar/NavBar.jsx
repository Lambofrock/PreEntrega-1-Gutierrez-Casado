import React from "react"
import CardWidget from "../Cardwidget/CardWidget"

console.log("holiswi")

function NavBar({ cartCount }) {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div>...</div>
                 <img className="rounded"  width="60" height="60" src="img\Logo (1).jpg" alt="logo" />
            <div className="container-fluid">
           
                <a className="navbar-brand" href="#">Hey Pulga !</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tienda</a>
                        </li>
                    
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Calidad en cada fibra</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                      <CardWidget cartCount={cartCount}/>
                    </form>
                </div>  
            </div>
        </nav>
    )
}

export default NavBar 