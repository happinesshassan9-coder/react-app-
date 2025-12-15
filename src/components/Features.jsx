import './Features.css'


const features = [
{ title: 'Start Course', desc: 'Begin learning today.' },
{ title: 'Expert Teachers', desc: 'Qualified instructors.' },
{ title: 'Strategic Location', desc: 'Safe environment.' }
]


export default function Features() {
return (
<section className="features">
{features.map((item, index) => (
<div key={index} className="feature-card">
<h3>{item.title}</h3>
<p>{item.desc}</p>
</div>
))}
</section>
)
}