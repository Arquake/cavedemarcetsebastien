import presse from "../assets/magasin_chatelet.jpg";
import decouverte from '../assets/fleur_jonquet3.jpg'
import {NavLink} from "react-router-dom";
import {useEffect} from "react";

const Agenda = () => {
    useEffect(() => {
        document.title = "Cave de Marc et Sebastien - Agenda / Dégustation";
    },[])
    return (
        <>
            <main className="bg-neutral-950 grid grid-cols-6 xl:gap-10 gap-16 pt-10 px-4 text-neutral-50">

                {/* Section main */}
                <div className="3xl:col-span-2 sm:col-span-3 col-span-full 3xl:col-start-2 col-start-1" role="dialog" aria-labelledby="titre" aria-describedby="desc">
                    <h2 className="title title-style" id="titre">

                        <span className="text-orange-600">A </span>
                        découvrir :
                        Château La Fleur Joncquet
                    </h2>
                    <div className="mt-4 sm:mr-0 mr-4">
                        <img alt="verre et bouteille de vin Château La Fleur Jonquet" src={decouverte} className="sm:w-2/5 w-2/5 m-auto xl:w-48 float-left mr-4" />
                        <div className="sm:text-lg text-base" id="desc">
                            <p>
                                Avec sa robe brillante d'un rouge franc, ce vin se caractérise par un nez de fruits rouges mûrs. En bouche, une attaque longue et douce, suivie par des tanins souples et élégants, il révèle un boisé fin et une bonne longueur finale. La dégustation est bien équilibrée. En ce qui concerne le service de ce vin, les amateurs ne se trompent pas et disent : Le " Graves " va avec tout !
                            </p>
                            <p className="mt-4">
                                A déguster dès maintenant dans notre <NavLink to="/contact" className="underline underline-offset-1 text-orange-600" role="navigation">magasin du Châtelet.</NavLink>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section droite */}
                <div className="3xl:col-span-1 lg:col-span-2 sm:col-span-3 col-span-full 2k:col-start-5 3xl:col-start-5 lg:col-start-5 sm:col-start-4">
                    <article role="dialog-r" aria-labelledby="titre-r" aria-describedby="desc-r">
                        <h2 className="title title-style" id="titre-r">
                            La
                            <span className="text-orange-600"> Presse </span>
                            En parle ...
                        </h2>
                        <div className="mt-4 sm:mr-0 mr-4">
                            <img src={presse} alt="présentoir de vins dans la boutique" className="sm:h-64 md:w-auto sm:w-full w-2/5 float-left mr-4"/>
                            <p className="sm:text-lg text-base" id="desc-r">
                                <em>"On a un rapport à la table, c'est essentiel !"</em>
                                C'est à proximité de la Loire que cet ancien sommelier propose une sélection de crus particulièrement exigeante. Car ici, « c'est le vin qui parle ». Plus que l'étiquette, on y tient la qualité intrinsèque du produit pour déterminante.
                                Côté tarifs, Marc et Sébastien ont opté pour la formule "prix propriété plus transport". Outre une cave fournie en bourgognes, bordeaux et en vins de Loire, l'accent est mis sur les vins du Languedoc-Roussillon.
                                <a className="underline underline-offset-1" href="lepoint.fr" role="link">lepoint.fr</a>
                            </p>
                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}

export default Agenda;