import '../styles/hero.css'
import logo from '../assets/logo_header.jpg'
const Logo = () => {
    return (
        <>
            <div className="hero">
                <img src={logo} alt="logo Marc et Sebastien" className="opacity-0 w-full"/>
            </div>
        </>
    )
}

export default Logo;