import {useEffect} from "react";

const Mo = () => {
    useEffect(() => {
        document.title = "Cave de Marc et Sebastien - Mentions Obligatoires";
    },[])
    return (
        <>
            <main className="text-neutral-50 xl:mx-24 lg:mx-12 sm:mx-8 mx-4 pb-24 sm:text-base text-sm">
                <h1 className="text-4xl text-center font-bold">Mentions légales</h1>
                <h2 className="text-center mb-12">En vigueur au 28/07/2024</h2>


                <p className="mb-1">
                    Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la Confiance en l’économie
                    numérique, il est porté à la connaissance des utilisateurs et visiteurs, ci-après l' "Utilisateur",
                    du site
                    <a href="https://www.cavedemarcetsebastien.fr" className="underline underline-offset-1"
                       role="link"> https://www.cavedemarcetsebastien.fr </a>
                    , ci-après le "Site", les présentes mentions légales.</p>

                <p className="mb-1">La connexion et la navigation sur le Site par l’Utilisateur implique acceptation
                    intégrale et sans réserve des présentes mentions légales.</p>

                <p className="mb-1">Ces dernières sont accessibles sur le Site à la rubrique "Mentions légales".</p>

                <h2 className="mt-8 mb-4 text-2xl font-semibold">EDITION DU SITE</h2>

                <p className="mb-2">L'édition du Site est assurée par la société CAVE DE MARC ET SEBASTIEN, SARL au
                    capital de 80000 euros, immatriculée au Registre du Commerce et des Sociétés de Orléans sous le
                    numéro 391598984 dont le siège social est situé au 7 PLACE DU CHATELET 45000 ORLEANS,</p>

                <ul className="list-inside list-disc mb-2">
                    <li className="mb-1">
                        Numéro de téléphone :
                        <a href="tel:0238629411" className="underline underline-offset-1" role="link">02 38 62 94 11</a>
                    </li>
                    <li className="mb-1">
                        Adresse e-mail :
                        <a href="mailto:cavemarcetsebastien@wanadoo.fr" className="underline underline-offset-1"
                           role="link">cavemarcetsebastien@wanadoo.fr</a>.
                    </li>
                    <li className="mb-1">
                        <a href="https://annuaire-entreprises.data.gouv.fr/entreprise/cave-de-marc-et-sebastien-391598984"
                           className="underline underline-offset-1" role="link">N° de TVA intracommunautaire :
                            FR88391598984</a>
                    </li>
                    <li className="mb-1">
                        Directeur de la publication : MARC, JACQUES FARCY
                    </li>
                </ul>

                <p>ci-après l'"Editeur".</p>

                <h2 className="mt-8 mb-4 text-2xl font-semibold">HEBERGEUR</h2>

                <p className="mb-1">L'hébergeur du Site est la société O2SWITCH (O2SWITCH), dont le siège social est
                    situé au CHEMIN DES PARDIAUX CLERMONT FERRAND .</p>

                <h2 className="mt-8 mb-4 text-2xl font-semibold">ACCES AU SITE</h2>

                <p className="mb-1">Le Site est normalement accessible, à tout moment, à l'Utilisateur. Toutefois,
                    l'Editeur pourra, à tout moment, suspendre, limiter ou interrompre le Site afin de procéder,
                    notamment, à des mises à jour ou des modifications de son contenu. L'Editeur ne pourra en aucun cas
                    être tenu responsable des conséquences éventuelles de cette indisponibilité sur les activités de
                    l'Utilisateur.</p>

                <p className="mb-1">Toute utilisation, reproduction, diffusion, commercialisation, modification de toute
                    ou partie du Site, sans autorisation expresse de l’Editeur est prohibée et pourra entraîner des
                    actions et poursuites judiciaires telles que prévues par la règlementation en vigueur.</p>

                <p>Designer : <a className="underline underline-offset-1" href="mailto:proweb@club.fr" role="link">Nicolas Desmier</a></p>
                <p>Développeur : <a className="underline underline-offset-1" href="mailto:nicolas@veras.fr" role="link">Nicolas Vera</a></p>
            </main>
        </>
    )
}

export default Mo;