import './Header.css';
function Header() {

    return (

        <header className="header">

            <img src="geospatiallogo.webp" alt="Robert Rivas GeoSpatial Developer" className="logo"/>

            <nav>

                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/services" className="nav-link">Services</a>
                <a href="/contact" className="nav-link">Contact</a>
            </nav>

        </header>

    );

}
export default Header;