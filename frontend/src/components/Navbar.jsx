import './Navbar.css';

function Navbar () {
    return (
        // Section header containing heading and headshot
        <div className='nav-container'>
            <nav className='navbar navbar-expand-lg navbar-dark' id='navbar'>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navCollapse' aria-controls='navCollapse' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id='navCollapse'>
                    <ul className='nav navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='/'>
                                HOME
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/projects'>
                                PROJECTS
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/music'>
                                MUSIC
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/about'>
                                ABOUT
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar