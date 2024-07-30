import decouverte from "../assets/fleur_jonquet3.jpg";
import '../styles/cards.css'
import '../styles/title.css'
import {useEffect} from "react";


const Selection = () => {
    useEffect(() => {
        document.title = "Cave de Marc et Sebastien - Sélection";
    },[])
    return (
        <>
            {/* description */}
            <main className="bg-neutral-950 text-neutral-50 2xl:text-base text-sm">
                <div className="grid grid-cols-7 xl:gap-10 pt-10" role="dialog" aria-describedby="dialogDescription">
                    <p className="3xl:col-start-3 lg:col-start-2 3xl:col-span-3 lg:col-span-5 col-span-full lg:mx-0 mx-8" id="dialogDescription">
                        La cave propose plus de 1000 références couvrant dans le détail une très grande partie du
                        vignoble
                        français, nous parcourons les salons et les vignobles pour vous offrir les meilleurs rapports
                        prix/
                        plaisir. Cette gamme étendue et notre expérience acquise dans la restauration et les métiers de
                        bouche, nous permettent de vous conseiller dans le choix de vos vins pour vos repas les plus
                        élaborés ou vos événements familiaux.
                        L' importance de notre stock nous donne une force de proposition large et met à votre
                        disposition
                        une gamme étendue et ce sans délai pour vos remerciements et vos cadeaux d'affaires.
                    </p>
                </div>


                {/* choix */}
                <div className="grid grid-cols-7 xl:gap-10 text-neutral-50 mt-8">
                    {/* cards container */}
                    <div className="3xl:col-start-3 lg:col-start-2 3xl:col-span-3 lg:col-span-5 col-span-full grid grid-cols-5 xl:gap-10 sm:gap-6 gap-2 lg:mx-0 mx-6" role="dialog" aria-labelledby="titre-1 titre-2 titre-3 titre-4 titre-5">

                        <div className="card bourgogne" aria-label="verres tulipe de bourgogne" id="titre-1">
                            <div className="bg-neutral-950 bg-opacity-70 absolute w-full px-4 xl:py-8 py-6">
                                <a href="#bourgogne" className="font-semibold hover:underline underline-offset-1">Bourgogne</a>
                            </div>
                        </div>

                        <div className="card bordeaux" aria-label="verres tulipe de bordeaux" id="titre-2">
                            <div className="bg-neutral-950 bg-opacity-70 absolute w-full px-4 xl:py-8 py-6">
                                <a href="#bordeaux" className="font-semibold hover:underline underline-offset-1">Bordeaux</a>
                            </div>
                        </div>

                        <div className="card languedoc" aria-label="raisins rouge et noir" id="titre-3">
                            <div className="bg-neutral-950 bg-opacity-70 absolute w-full px-4 xl:py-8 py-6">
                                <a href="#languedoc" className="font-semibold hover:underline underline-offset-1">Languedoc Roussillon</a>
                            </div>
                        </div>

                        <div className="card rhone" aria-label="champ de vignes" id="titre-4">
                            <div className="bg-neutral-950 bg-opacity-70 absolute w-full px-4 xl:py-8 py-6">
                                <a href="#rhone" className="font-semibold hover:underline underline-offset-1">Vallée du Rhône</a>
                            </div>
                        </div>

                        <div className="card champagne" aria-label="flûtes de champagne" id="titre-5">
                            <div className="bg-neutral-950 bg-opacity-70 absolute w-full px-4 xl:py-8 py-6">
                                <a href="#champagne" className="font-semibold hover:underline underline-offset-1">Champagne</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-7 3xl:gap-10">
                    <div className="xl:col-span-2 lg:col-span-3 sm:col-span-4 col-span-full 3xl:col-start-3 xl:col-start-2 lg:col-start-2 xl:mr-0 mr-8 ml-4">
                        {/* Bourgogne */}
                        <div className="pt-10 pb-12" id="bourgogne" role="dialog-bourgogne" aria-labelledby="titre-bourgogne" aria-describedby="bourgogne-desc">
                            <h2 className="title-style title" id="titre-bourgogne">
                                <span className="text-orange-600">Sélection </span> Bourgogne
                            </h2>
                            <div id="bourgogne-desc">
                                <p>Domaine Jayer Gilles à Magny-les-Villers</p>
                                <p>Domaine Jacques frédéric Mugnier à Chambolle Musigny</p>
                                <p>Domaine Tollot-Beaut à Chorey-les-Beaune</p>
                                <p>Domaine Leflaive à puligny-Montrachet</p>
                                <p>Domaine Dujac à Morey-St-Denis</p>
                                <p>Domaine Jean-Marc Boillot à Pommard</p>
                                <p>Domaine Hubert Lamy à Saint Aubin</p>
                            </div>
                        </div>

                        {/* Bordeaux */}
                        <div className="pb-12" id="bordeaux" role="dialog-bordeaux" aria-labelledby="titre-bordeaux" aria-describedby="bordeaux-desc">
                            <h2 className="title-style title" id="titre-bordeaux">
                                <span className="text-orange-600">Sélection </span> Bordeaux
                            </h2>
                            <div id="bordeaux-desc">
                                <p>Château Belle Garde à AOC Bordeaux</p>
                                <p>Château Les Ormes Sorbets Cru Bourgeois du Médoc</p>
                                <p>Château Tour-haut-Caussan Cru Bourgeois du Médoc</p>
                                <p>Château Pipeau Saint Emilion Grand Cru</p>
                                <p>Château Joinin AOC Bordeaux</p>
                            </div>
                        </div>

                        {/* Languedoc-Roussillon  */}
                        <div className="pb-12" id="languedoc" role="dialog-languedoc" aria-labelledby="titre-languedoc" aria-describedby="languedoc-desc">
                            <h2 className="title-style title" id="titre-languedoc">
                                <span className="text-orange-600">Sélection </span> Languedoc Roussillon
                            </h2>
                            <div id="languedoc-desc">
                                <p>Domaine de l'Hortus AOC Côteaux du Languedoc</p>
                                <p>Mas des Agrunelles à Argelliers</p>
                                <p>Château Cascadais AOC Corbières</p>
                            </div>
                        </div>

                        {/* Vallée du Rhône */}
                        <div className="pb-12" id="rhone" role="dialog-rhone" aria-labelledby="titre-rhone" aria-describedby="rhone-desc">
                            <h2 className="title-style title" id="titre-rhone">
                                <span className="text-orange-600">Sélection </span> Vallée du Rhône
                            </h2>
                            <div id="rhone-desc">
                                <p>Domaine Alain Graillot AOC Crozes Hermitage</p>
                                <p>Domaine Chèze à limony</p>
                                <p>Domaine de la Janasse à Couthezon</p>
                            </div>
                        </div>

                        {/* Champagne */}
                        <div className="pb-12" id="champagne" role="dialog-champagne" aria-labelledby="titre-champagne" aria-describedby="champagne-desc">
                            <h2 className="title-style title" id="titre-champagne">
                                <span className="text-orange-600">Sélection </span> Champagne
                            </h2>
                            <div id="champagne-desc">
                                <p>Champagne Bonnaire à cramant</p>
                                <p>Champagne Clouet à Bouzy</p>
                                <p>Champagne Gosset à Aÿ</p>
                            </div>
                        </div>
                    </div>

                    {/* Section droite */}
                    <div
                        className="2k:col-span-1 lg:col-span-2 sm:col-span-3 col-span-full sm:col-start-5 sm:pt-10 pt-0 sm:mx-0 mx-4">
                        <article className="sm:h-80 h-[30rem]" role="dialog-r" aria-labelledby="titre-r" aria-describedby="r-desc">
                            <h2 className="font-bold tracking-normal p-2 title title-style" id="titre-r">
                                A
                                <span className="text-orange-600"> Découvrir</span>
                            </h2>
                            <div className="mt-4 flex">
                                <img src={decouverte} alt="vers de vin et bouteille de Château La Fleur Jonquet" className="h-64" />
                                <div className="ml-4 block" id="r-desc">
                                    <p className="font-bold mb-2">Château La Fleur Jonquet</p>
                                    <p className="leading-5">
                                        Avec sa robe brillante d'un rouge franc, ce vin se caractérise par un nez de fruits rouges mûrs. En bouche, une attaque longue et douce, suivie par des tanins souples et élégants, il révèle un boisé fin et une bonne longueur finale.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>




            </main>
        </>
    )
}

export default Selection;