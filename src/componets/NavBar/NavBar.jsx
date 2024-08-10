import React from "react"
import CardWidget from "../Cardwidget/CardWidget"
import { Link } from "react-router-dom"


function NavBar( ) {
   

    

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      
            <div className="container-fluid">
                 <img className="rounded" style={{marginInline:7}} width="60" height="60" src="img\Logo.jpg" alt="logo" />
           
                <a className="navbar-brand" href="/">Hey Pulga !</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-Link active" style={{paddingLeft: 13, textDecoration: 'none', color:"white"}} aria-current="page" to="/category/poleron">poleron</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link active" style={{paddingLeft: 13, textDecoration: 'none', color:"white"}} aria-current="page"to="/category/polera">polera</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link active" style={{paddingLeft: 13, textDecoration: 'none', color:"white"}} to="/category/chaqueta">chaqueta</Link> 
                        </li>
                    
                        <li className="nav-item">
                            <a className="nav-Link disabled" style={{paddingLeft: 13, textDecoration: 'none', color:"white"}} aria-disabled="true"> <strong> Elige tu Prenda!</strong> </a>
                        </li>
                    </ul>
                    <form className="d-flex " role="search">
                      <CardWidget/>
                    </form>
                </div>  
            </div>
        </nav>
    )
}

export default NavBar 