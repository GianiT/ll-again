import test1 from '../Images/testimonial-1.png'
import test2 from '../Images/testimonial-2.png'
import test3 from '../Images/testimonial-3.png'
import test4 from '../Images/testimonial-4.png'

function Testimonials() {
    return(
        <main className='spacing'>
            <h2 className='test-title'>Testimonials</h2>
        <div className='test-flex'>
            <div className='test-flex'>
                <div><img src={test1} alt="testimonial-1" className='test-person'></img></div>
                <div className='test-rows'>
                    <p className='test-p'>Rating</p>
                    <p className='test-p'>Name</p>
                    <p className='test-p'>Score: 10/10</p>
                </div>
            </div>
            <div className='test-flex'>
                <div><img src={test2} alt="testimonial-2" className='test-person'></img></div>
                <div className='test-rows'>
                    <p className='test-p'>Rating</p>
                    <p className='test-p'>Name</p>
                    <p className='test-p'>Score: 10/10</p>
                </div>
            </div>
            <div className='test-flex'>
                <div><img src={test3} alt="testimonial-3" className='test-person'></img></div>
                <div className='test-rows'>
                    <p className='test-p'>Rating</p>
                    <p className='test-p'>Name</p>
                    <p className='test-p'>Score: 10/10</p>
                </div>
            </div>
            <div className='test-flex'>
                <div><img src={test4} alt="testimonial-4" className='test-person'></img></div>
                <div className='test-rows'>
                    <p className='test-p'>Rating</p>
                    <p className='test-p'>Name</p>
                    <p className='test-p'>Score: 10/10</p>
                </div>
            </div>
        </div>
        </main>
    );
}
export default Testimonials;