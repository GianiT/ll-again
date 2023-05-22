import logo from '../Images/logo.png'
function Navbar() {
    return(
        <div className="navbar spacing">
            <img src={logo} alt="Logo"></img>
            <button className="nav-btn"><a href="https://www.google.com" target="#">HOME</a></button>
            <button className="nav-btn"><a href="https://www.google.com" target="#">ABOUT</a></button>
            <button className="nav-btn"><a href="https://www.google.com" target="#">MENU</a></button>
            <button className="nav-btn"><a href="https://www.google.com" target="#">RESERVATIONS</a></button>
            <button className="nav-btn"><a href="https://www.google.com" target="#">ORDER ONLINE</a></button>
            <button className="nav-btn"><a href="https://www.google.com" target="#">LOGIN</a></button>
        </div>
    )
}
export default Navbar;