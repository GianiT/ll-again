import chef1 from '../Images/about-1.jpg'
import chef2 from '../Images/about-2.jpg'

function About(){
    return(
        <main className='about-flex spacing'>
            <div className='about-rows'>
                <h1 className='hero-title'>Little Lemon</h1>
                <h3 className='hero-location'>Chicago</h3>
                <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus sodales tellus, sit amet aliquet arcu hendrerit in. Vestibulum tincidunt nulla at nibh vulputate vestibulum. Etiam ornare sit amet risus id rhoncus. Nullam mollis, ante a commodo consectetur, orci risus.</p>
                <br/>
                <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus sodales tellus, sit amet aliquet arcu hendrerit in. Vestibulum tincidunt nulla at nibh vulputate vestibulum. Etiam ornare sit amet risus id rhoncus. Nullam mollis, ante a commodo consectetur, orci risus.</p>
            </div>
            <div className='about-images'>
                <img src={chef1} alt="Mario and Antonio" className='about-img about-above'></img>
                <img src={chef2} alt="Mario and Antonio" className='about-img about-below'></img>
            </div>
        </main>
    )
}
export default About;