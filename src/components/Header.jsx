import './Header.css';

function Header() {
    return (
        <header className="main-header">
        <nav className="header-content">
            <a href="/"><h1>KeyStore</h1></a>
            <div className="content">           
                <a href="/inicio">Inicio</a>
                <a href="/catalogo">Catálogo</a>
                <a href="/nosotros">Nosotros</a>
                <a href="/contacto">Contacto</a>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping"></i>
            </div> 
        </nav>
        <img className='img-main' src="https://cdn.pixabay.com/photo/2023/06/01/05/58/sign-8032702_1280.jpg" alt="" />
        </header>
    );
}

export default Header;