import { Link } from 'react-router-dom'
import '../App.css'


function Navbar() {
    return (
        <div className="navbar">
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <Link to="/">Home</Link>
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
                <li className='navbar-item'>

                </li>
            </ul>

            <div
                className="link-container"
                style={{
                    display: 'flex', // Use flexbox to align items horizontally
                    justifyContent: 'center', // Center the items
                    alignItems: 'center', // Center the items vertically
                    gap: '20px', // Add spacing between the links
                    marginTop: '20px', // Add some margin above the links
                }}
            >
                <a
                    href="/LinhPhamResume.pdf"
                    download="LinhPhamResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        gap: '8px'
                    }}
                >
                    <img
                        src="/ResumeFavicon.png" 
                        alt="Favicon"
                        style={{
                            width: '30px',
                            height: '30px',
                        }}
                    />
                    View My Resume
                </a>

                <a
                    href="https://github.com/linh-pham19" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: '#fff',
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
            </div>
        </div>
    )
}

export default Navbar
