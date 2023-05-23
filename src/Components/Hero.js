import bruschetta from '../Images/hero-bruschetta.jpg'
function Hero() {
    return(
        <main className="hero-main spacing">
            <div className='hero-div hero-container'>
                <h1 className="hero-title">Little Lemon</h1>
                <h3 className="hero-location">Chicago</h3>
                <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus sodales tellus, sit amet aliquet arcu hendrerit in. Vestibulum tincidunt nulla at nibh vulputate vestibulum. Etiam ornare sit amet risus id rhoncus. Nullam mollis, ante a commodo consectetur, orci risus.</p>
                <button className="hero-button">Get free trial</button>
            </div>
            <div className='hero-div'>
                <img src={bruschetta} alt="bruschetta" className="hero-img"></img>
            </div>
            <br />
        </main>
    )
}
export default Hero;