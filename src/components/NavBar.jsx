const NavBar =()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col my-5">
                <ul class="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text dark "  href="#">Celulares</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text dark" href="#">Televisores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text dark" href="#">Tables</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text dark" href="#">Reloj</a>
                        </li>
                        </ul>    
                </div>
            </div>
        </div>
    )
}
export default NavBar;