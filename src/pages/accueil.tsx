import '../styles/title.css'
import article1 from '../assets/magasin_chatelet2.jpg'
import decouverte from '../assets/fleur_jonquet3.jpg'
import presse from '../assets/magasin_chatelet.jpg'
import {useEffect} from "react";
const Accueil = () => {
    useEffect(() => {
        document.title = "Cave de Marc et Sebastien - Accueil";
    },[])
    return (
        <>
            <main className="bg-neutral-950 grid grid-cols-6 xl:gap-10 sm:gap-16 sm:p-10 p-3 text-neutral-50">

                {/* Section main */}
                <div className="3xl:col-span-2 sm:col-span-3 col-span-full 3xl:col-start-2 col-start-1 " role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDescription">
                    <h2 className="text-2xl font-bold tracking-normal p-2 title" id="dialogTitle">
                        En deux
                        <span className="text-orange-600"> mots </span>
                        ...
                    </h2>
                    <div className="mt-4">
                        <img alt="intérieur de la boutique" src={article1} className="w-full xl:w-3/5 float-left mr-4" />
                        <p className="text-lg" id="dialogDescription">C'est avec les producteurs que le contact se fait en direct,
                            humainement.
                            Nos déplacements, nos rencontres régulières avec les producteurs nous permettent de suivre
                            l'évolution de leur production, et d'y sélectionner les meilleurs millésimes. Chaque vin est
                            soigneusement étudié afin d'apporter aux connaisseurs, spécialistes ou amateurs un conseil
                            riche, efficace, adapté à la situation et au goût de chacun. La sélection et le conseil,
                            c'est une affaire de connaissance et de passion...
                        </p>
                    </div>
                </div>

                {/* Section droite */}
                <div className="lg:col-span-2 sm:col-span-3 col-span-full 2k:col-start-5 3xl:col-start-5 lg:col-start-5 sm:col-start-4 col-start-1" role="dialog-r1" aria-labelledby="dialogTitle-r1" aria-describedby="dialogDescription-r1">
                    <article className="h-80">
                        <h2 className="text-2xl font-bold tracking-normal p-2 title" id="dialogTitle-r1">
                            A
                            <span className="text-orange-600"> Découvrir</span>
                        </h2>
                        <div className="mt-4 flex md:text-base text-sm">
                            <img src={decouverte} alt="vers de vin et bouteille de 'Graves'" className="h-64" />
                            <div className="ml-4 block" id="dialogDescription-r1">
                                <h3 className="font-bold mb-2">Le "Graves" va avec tout !</h3>
                                <h4 className="leading-5">Avec sa robe brillante d'un rouge franc, ce vin se caractérise par un nez de fruits rouges mûrs. En bouche, une attaque longue et douce, ...</h4>
                            </div>
                        </div>
                    </article>

                    <article className="mt-8 mb-20" role="dialog-r2" aria-labelledby="dialogTitle-r2" aria-describedby="dialogDescription-r2">
                        <h2 className="text-2xl font-bold tracking-normal p-2 title" id="dialogTitle-r2">
                            La
                            <span className="text-orange-600"> Presse </span>
                            En parle ...
                        </h2>
                        <div className="mt-4">
                            <img src={presse} alt="présentoir de vins dans la boutique" className="h-64 md:w-auto w-full float-left mr-4"/>
                            <p id="dialogDescription-r2">
                                <em>"On a un rapport à la table, c'est essentiel !"</em>
                                C'est à proximité de la Loire que cet ancien sommelier propose une sélection de crus particulièrement exigeante. Car ici, « c'est le vin qui parle ». Plus que l'étiquette, on y tient la qualité intrinsèque du produit pour déterminante.
                                Côté tarifs, Marc et Sébastien ont opté pour la formule "prix propriété plus transport". Outre une cave fournie en bourgognes, bordeaux et en vins de Loire, l'accent est mis sur les vins du Languedoc-Roussillon.
                                lepoint.fr
                            </p>
                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}

export default Accueil;