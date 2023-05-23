import salad from '../Images/greek salad.jpg'
import bruschetta from '../Images/hero-bruschetta.jpg'
import dessert from '../Images/lemon dessert.jpg'

function Highlights() {
    return(
        <article className='high-food'>
                <div className='high-rect'>
                    <img src={salad} alt="salad" className='high-salad'></img>
                    <div className='high-food'>
                        <h4 className='high-title'>Greek salad</h4>
                        <span className='high-price'>$12.99</span>
                    </div>
                    <p className='high-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius vehicula lacus fringilla tincidunt.</p>
                    <div className='high-last'>
                        <form action="https://google.com" target="#">
                            <input type="submit" value="Order for delivery" className='order-btn'></input>
                        </form>
                        <icon className='high-icon'>x</icon>
                    </div>
                </div>
                <div className='high-rect'>
                    <img src={bruschetta} alt="bruschetta" className='high-bruschetta'></img>
                    <div className='high-food'>
                        <h4 className='high-title'>Bruschetta</h4>
                        <span className='high-price'>$9.99</span>
                    </div>
                    <p className='high-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius vehicula lacus fringilla tincidunt.</p>
                    <div className='high-last'>
                        <form action="https://google.com" target="#">
                            <input type="submit" value="Order for delivery" className='order-btn'></input>
                        </form>
                        <icon className='high-icon'>x</icon>
                    </div>
                </div>
                <div className='high-rect'>
                    <img src={dessert} alt="dessert" className='high-dessert'></img>
                    <div className='high-food'>
                        <h4 className='high-title'>Lemon Dessert</h4>
                        <span className='high-price'>$5.00</span>
                    </div>
                    <p className='high-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius vehicula lacus fringilla tincidunt.</p>
                    <div className='high-last'>
                        <form action="https://google.com" target="#">
                            <input type="submit" value="Order for delivery" className='order-btn'></input>
                        </form>
                        <icon className='high-icon'>x</icon>
                    </div>
                </div>
        </article>
    )
}
export default Highlights;