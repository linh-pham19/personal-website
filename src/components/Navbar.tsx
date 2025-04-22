import { Link } from 'react-router-dom'
import '../App.css'


function Navbar() {
    return (
        <div className="navbar">
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/resume">My Resume</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/travel">Travel</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/contact">Contact me</Link>
                </li>
            </ul>
                <a
                    href="https://github.com/linh-pham19"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '10px 20px',
                        backgroundColor: 'transparent',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        gap: '8px'
                    }}
                >
                    <img
                        src="/GitHubFavicon.png"
                        alt="Favicon"
                        style={{
                            width: '30px',
                            height: '30px',
                        }}
                    />

                    View My GitHub
                </a>

                <a
                    href="https://linkedin.com/in/linh-p"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '10px 20px',
                        backgroundColor: 'transparent',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        gap: '8px'
                    }}
                >
                    <img
                        src="/linkedinlogo.png"
                        alt="Favicon"
                        style={{
                            width: '30px',
                            height: '30px',
                        }}
                    />

                    View My LinkedIn
                </a>
        </div>
    )
}

export default Navbar
