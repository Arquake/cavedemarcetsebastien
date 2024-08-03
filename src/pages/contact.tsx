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
                        <iframe className="w-full h-full mt-4 border-0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42817.275748827145!2d1.8761980966294645!3d47.876783482524345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4e4d0de44720d%3A0x2f1535db46f32aa3!2sCaves%20Marc%20et%20S%C3%A9bastien!5e0!3m2!1sfr!2sfr!4v1722681746352!5m2!1sfr!2sfr"
                                width="600" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Contact;