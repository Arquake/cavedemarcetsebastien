import {NavLink} from "react-router-dom";


const Footer = () => {
    return(
        <>
            <footer className="bg-neutral-950 text-neutral-50 p-2 bottom-0 right-0 w-full" role="contentinfo">
                <div className="sm:mx-16 flex place-content-end text-neutral-500">
                    <div className="">
                        © 2024 Cave de Marc et Sébastien
                    </div>
                    <div className="ml-12">
                        <NavLink to="/mentions-obligatoires" className="hover:underline underline-offset-1 underline-neutral-500" role="navigation">Mentions Obligatoires</NavLink>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;