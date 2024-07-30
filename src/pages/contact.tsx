import {useEffect} from "react";

const Contact = () => {
    useEffect(() => {
        document.title = "Cave de Marc et Sebastien - Contact";
    },[])
    return (
        <>
            <main className="bg-neutral-950 text-neutral-50">
                <div className="w-full lg:grid grid-cols-6 gap-16 pt-10 px-4">
                    <div className="3xl:col-span-2 lg:col-span-3 col-span-full 3xl:col-start-2 col-start-1" role="dialog" aria-labelledby="titre" aria-describedby="desc">
                        <h2 className="text-2xl font-bold tracking-normal p-2 title text-orange-600" id="titre">
                            Nos Magasins
                        </h2>
                        <div className="lg:text-lg text-base" id="desc">

                            <p className="mt-4">
                                <span className="font-bold">Cave de Marc et Sébastien - Orléans Centre</span><br/>
                                <a href="mailto:cavemarcetsebastien@wanadoo.fr" className="underline underline-offset-1" role="link">
                                    cavemarcetsebastien@wanadoo.fr
                                </a>
                            </p>

                            <p className="mt-4">
                                7 place du Châtelet - 45000 ORLEANS<br/>
                                Tél :
                                <a href="tel:0238629411" className="underline underline-offset-1" role="link">
                                    02 38 62 94 11
                                </a> - Fax:
                                <a href="tel:0238812650" className="underline underline-offset-1" role="link">
                                    02 38 81 26 50
                                </a>

                            </p>


                            <p className="mt-12">
                                Horaires d'ouverture :<br/>
                                Du mardi au vendredi, de 10h à 12h et de 15h à 19h30<br/>
                                Le samedi, de 9h30 à 13h et de 14h à 19h30<br/>
                                Le dimanche, de 10h à 13h
                            </p>

                            <p className="mt-4 font-bold">
                                Cave de Marc et Sébastien - Orléans Sud
                            </p>

                            <p className="mt-4">
                                23 rue Basse Mouillère - 45100 ORLEANS<br/>
                                Tél :
                                <a href="tel:0238511741" className="underline underline-offset-1" role="link">
                                    02 38 51 17 41
                                </a> - Fax:
                                <a href="tel:0238511741" className="underline underline-offset-1" role="link">
                                    02 38 51 17 41
                                </a>
                            </p>

                            <p className="mt-4">
                                Horaires d'ouverture :<br/>
                                Du mardi au jeudi, de 10h à 12h15 et de 15h à 19h<br/>
                                Le vendredi , de 10h à 12h15 et de 15h à 19h30<br/>
                                Le samedi, de 9h30 à 13h et de 14h à 19h30
                            </p>

                        </div>
                    </div>
                    <div
                        className="3xl:col-span-2 lg:col-span-3 col-span-full lg:h-full sm:h-96 h-64 lg:mt-0 mt-8 w-full">
                        <iframe className="w-full h-full  mt-4"
                                src="http://maps.google.fr/maps?f=q&amp;source=s_q&amp;hl=fr&amp;geocode=&amp;q=cave+de+marc+et+sebastien+orleans&amp;sll=47.890046,1.906128&amp;sspn=0.043569,0.084372&amp;ie=UTF8&amp;ll=47.890046,1.906128&amp;spn=0.069065,0.102997&amp;z=12&amp;output=embed"></iframe>

                    </div>
                </div>

            </main>
        </>
    )
}

export default Contact;