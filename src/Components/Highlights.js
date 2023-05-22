import salad from '../Images/greek salad.jpg'
import bruschetta from '../Images/hero-bruschetta.jpg'
import dessert from '../Images/lemon dessert.jpg'

function Highlights() {
    return(
        <main className='spacing'>
            <section className='high-section high-flex'>
                <h2 className='high-specials'>Specials</h2>
                <button className='high-btn'></button>
            </section>
            <section className='high-section high-flex'>
                <div>
                    <img src={salad} alt="salad" className='high-salad'></img>
                    <div className='high-food high-flex'>
                        <h4 className='high-title'>Greek salad</h4>
                        <span className='high-price'>$12.99</span>
                    </div>
                    <p className='high-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius vehicula lacus fringilla tincidunt.</p>
                   <div className='high-flex'>
                        <h6 className='high-del'>Order for delivery</h6>
                        <icon className='high-icon'>x</icon>
                    </div>
                </div>
                <div>
                    <img src={bruschetta} alt="bruschetta" className='high-bruschetta'></img>
                    <div className='high-food high-flex'>
                        <h4 className='high-title'>Bruschetta</h4>
                        <span className='high-price'>$9.99</span>
                    </div>
                    <p className='high-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius vehicula lacus fringilla tincidunt.</p>
                   <div className='high-flex'>
                        <h6 className='high-del'>Order for delivery</h6>
                        <icon className='high-icon'>x</icon>
                    </div>
                </div>
                <div className='high-flex'>
                    <img src={dessert} alt="dessert" className='high-dessert'></img>
                    <div className='high-food high-flex'>
                        <h4 className='high-title'>Lemon Dessert</h4>
                        <span className='high-price'>$5.00</span>
                    </div>
                    <p className='high-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius vehicula lacus fringilla tincidunt.</p>
                   <div className='high-flex'>
                        <h6 className='high-del'>Order for delivery</h6>
                        <icon className='high-icon'>x</icon>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Highlights;