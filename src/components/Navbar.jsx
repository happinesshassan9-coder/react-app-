import './Navbar.css'


export default function Navbar() {
return (
<nav className="navbar">
<h2 className="logo">edunity</h2>
<ul className="nav-links">
<li>Home</li>
<li>About</li>
<li>Courses</li>
<li>Blog</li>
<li>Contact</li>
</ul>
<button className="nav-btn">Enroll Now</button>
</nav>
)
}