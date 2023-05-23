import logo from '../Images/logo.png'
function Navbar() {
    return(
        <div className="navbar spacing">
            <img src={logo} alt="Logo"></img>
            <form action="https://google.com" target='#'>
                <input type="submit" value="HOME" className='nav-btn'></input>
            </form>
            <form action="https://google.com" target='#'>
                <input type="submit" value="ABOUT" className='nav-btn'></input>
            </form>
            <form action="https://google.com" target='#'>
                <input type="submit" value="MENU" className='nav-btn'></input>
            </form>
            <form action="https://google.com" target='#'>
                <input type="submit" value="RESERVATIONS" className='nav-btn'></input>
            </form>
            <form action="https://google.com" target='#'>
                <input type="submit" value="ORDER ONLINE" className='nav-btn'></input>
            </form>
            <form action="https://google.com" target='#'>
                <input type="submit" value="LOGIN" className='nav-btn'></input>
            </form>
        </div>
    )
}
export default Navbar;