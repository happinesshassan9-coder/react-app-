import './About.css'
import aboutImg from '../assets/images/about-kid.png'


export default function About() {
return (
<section className="about">
<img src={aboutImg} alt="Child" />
<div>
<h2>It's Our Passion To Work With Children</h2>
<p>We nurture creativity and confidence.</p>
<button>Admission Open</button>
</div>
</section>
)
}