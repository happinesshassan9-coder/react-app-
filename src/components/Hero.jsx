import './Hero.css'
import kid1 from '../assets/images/hero-kid-1.png'
import kid2 from '../assets/images/hero-kid-2.png'


export default function Hero() {
return (
<section className="hero">
<div className="hero-text">
<h1>The Best Place To Learn And Play For Kids</h1>
<p>Interactive learning experience for growing minds.</p>
<div className="hero-buttons">
<button className="primary">Browse Courses</button>
<button className="secondary">Watch Video</button>
</div>
</div>


<div className="hero-images">
<img src={kid1} alt="Kid" />
<img src={kid2} alt="Kid" />
</div>
</section>
)
}