import face from '../img/face.jpg';
import "./Header.css";

function Header () {
    return (
        // Section header containing heading and headshot
        <section className='align-middle' id="header">
            <h1> Giovanni Aratico | SanaraX </h1>
            <img src={face} alt="face-pic" id="headshot"/> 
        </section>
    )
}

export default Header
