import article1 from "../assets/mets-vins.jpg";
import decouverte from "../assets/fleur_jonquet3.jpg";
import presse from "../assets/presse.jpg";
import {useEffect} from "react";

const Mets = () => {
    useEffect(() => {
        document.title = "Cave de Marc et Sebastien - Mets et vins";
    },[])
    return (
        <>
            <main className="bg-neutral-950 grid grid-cols-6 3xl:gap-32 xl:gap-10 md:gap-16 gap-10 pt-10 px-4 text-neutral-50">

                {/* Section main */}
                <div className="3xl:col-span-3 sm:col-span-3 col-span-full 3xl:col-start-2 col-start-1" role="dialog" aria-labelledby="titre" aria-describedby="desc">
                    <h2 className="title title-style" id="titre">
                        <span className="text-orange-600">Accords mets et vins, les principes.</span>
                    </h2>
                    <div className="mt-4">
                        <img alt="pancarte de plats" src={article1} className="w-full xl:w-2/5 float-left mr-4 sm:mb-0 mb-2" />
                        <div className="sm:text-lg text-base" id="desc">
                            Pour le premier article de cette rubrique, permettez -moi de poser un cadre un petit peu général.
                            Le raisonnement pour choisir son vin pour un repas doit tenir compte de plusieurs éléments.
                            L'erreur la plus souvent commise est de ne tenir compte uniquement de la matière première (des coquilles St Jacques par exemple), ce qui est nécessaire, mais pas suffisant.
                            <br /><br/>
                            La préparation, le mode de cuisson, l'accompagnement, sont tout aussi déterminants ; une St Jacques cuite à la vapeur ou juste saisie à la poêle ne donne pas le même goût. Il faut tenir compte de l'univers de la recette, son accompagnement, les éléments culturels, la géographie, le climat, en résumé le terroir, le nord ou le sud, un climat chaud ou un climat froid, lardons et champignons ou olive et tomate, en étant un peu caricatural.
                        </div>
                    </div>
                </div>

                {/* Section droite */}
                <div className="lg:col-span-2 sm:col-span-3 col-span-full 2k:col-start-5 3xl:col-start-5 lg:col-start-5 sm:col-start-4 col-start-1">
                    <article className="sm:h-80 h-96 xl:mb-16 lg:mb-36 md:mb-28 sm:mb-36 mb-20" role="dialog-r1" aria-labelledby="titre-r1" aria-describedby="desc-r1">
                        <h2 className="title title-style" id="titre-r1">
                            A
                            <span className="text-orange-600"> Découvrir</span>
                        </h2>
                        <div className="mt-4 text-base absolute">
                            <img src={decouverte} alt="vers de vin et bouteille de Château La Fleur Jonquet" className="h-64 float-left mr-4" />
                            <div className="block 2xl:mr-4 mr-2" id="desc-r1">
                                <p className="font-bold mb-2">Château La Fleur Jonquet</p>
                                <p className="leading-5">
                                    Avec sa robe brillante d'un rouge franc, ce vin se caractérise par un nez de fruits rouges mûrs. En bouche, une attaque longue et douce, suivie par des tanins souples et élégants, il révèle un boisé fin et une bonne longueur finale.

                                    La dégustation est bien équilibrée. En ce qui concerne le service de ce vin, les amateurs ne se trompent pas et disent : Le " Graves " va avec tout !</p>
                            </div>
                        </div>
                    </article>

                    <article className="mt-8 sm:mb-0 mb-20" role="dialog-r2" aria-labelledby="titre-r2" aria-describedby="desc-r2">
                        <h2 className="title title-style" id="titre-r2">
                            La
                            <span className="text-orange-600"> Presse </span>
                            En parle ...
                        </h2>
                        <div className="mt-4">
                            <img src={presse} alt="vers de vin rouge" className="h-64 md:w-auto w-full float-left mr-4"/>
                            <p id="desc-r2">
                                lepoint.fr, n°1522<br />
                                <em>"On a un rapport à la table, c'est essentiel !"</em>
                                C'est à proximité de la Loire que ces deux anciens sommeliers proposent une sélection de crus particulièrement exigeante. Car ici, « c'est le vin qui parle ». Plus que l'étiquette, on y tient la qualité intrinsèque du produit pour déterminante.
                                Côté tarifs, Marc et Sébastien ont opté pour la formule "prix propriété plus transport". Outre une cave fournie en bourgognes, bordeaux et en vins de Loire, l'accent est mis sur les vins du Languedoc-Roussillon.
                            </p>
                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}

export default Mets;