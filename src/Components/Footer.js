import restaurant from '../Images/footer.jpg'

function Footer() {
    return(
        <main className='spacing footer-flex'>
            <img src={restaurant} alt="Restaurant" className='footer-img'></img>
            <section className='footer-section'>
                <h4 className='footer-title'>Doormat Navigation</h4>
                <li className='footer-li'>Home</li>
                <li className='footer-li'>About</li>
                <li className='footer-li'>Menu</li>
                <li className='footer-li'>Reservations</li>
                <li className='footer-li'>Order Online</li>
                <li className='footer-li'>Login</li>
            </section>
            <section className='footer-section'>
                <h4 className='footer-title'>Contact</h4>
                <li className='footer-li'>Address</li>
                <li className='footer-li'>Phone Number</li>
                <li className='footer-li'>E-mail</li>
            </section>
            <section className='footer-section'>
                <h4 className='footer-title'>Social Media Links</h4>
                <li className='footer-li'>Facebook</li>
                <li className='footer-li'>Instagram</li>
                <li className='footer-li'>Twitter</li>
            </section>
        </main>
    )
}
export default Footer;