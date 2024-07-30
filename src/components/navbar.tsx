import {NavLink} from "react-router-dom";

const activeClassCheck = (isActive: boolean) => {
    return (isActive ? "text-orange-600" : "")+" hover:text-orange-600 transition duration-150 ease-in-out";
}

const Navbar = () => {
    return (
        <>
            <header>
                <nav className="bg-neutral-950 text-neutral-50 sm:p-8 p-4 lg:text-2xl md:text-lg sm:text-sm text-xs font-bold" role="navigation">
                    <ul className="flex flex-wrap md:gap-12 sm:gap-8 gap-2">

                        <NavLink to="/" className={({isActive}) => (activeClassCheck(isActive))}>Accueil</NavLink>
                        <NavLink to="/selection" className={({isActive}) => (activeClassCheck(isActive))}>Sélection</NavLink>
                        <NavLink to="/mets-et-vins" className={({isActive}) => (activeClassCheck(isActive))}>Mets et vins</NavLink>
                        <NavLink to="/agenda-degustations" className={({isActive}) => (activeClassCheck(isActive))}>Agenda / Dégustations</NavLink>
                        <NavLink to="/contact" className={({isActive}) => (activeClassCheck(isActive))}>Contact</NavLink>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar