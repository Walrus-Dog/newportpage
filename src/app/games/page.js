"use client"
import React, { useState } from "react";
import Head from "../../../components/Head/Head";
import LogoGames from "../../../components/Nav Section/Logos/LogoGames";
import NavGames from "../../../components/Nav Section/Navs/NavGames";
import SocialGames from "../../../components/Nav Section/Socials/SocialGames";
import LangGames from "../../../components/Nav Section/Langs/LangGames";
import ColophonGames from "../../../components/Nav Section/Colophons/ColophonGames";
import FsLightbox from "fslightbox-react";
import HeaderGamesSmall from "../../../components/NavSecSmall/Headers/HeaderGamesSmall";
import ColophonGamesSmall from "../../../components/NavSecSmall/ColophonSmall/ColpohonGamesSmall";

export default function Games() {

    const [setoggler1, seToggler1] = useState(false);
    const [setoggler2, seToggler2] = useState(false);
    const [setoggler3, seToggler3] = useState(false);
    const [rqtoggler1, rqToggler1] = useState(false);
    const [rqtoggler2, rqToggler2] = useState(false);
    const [rqtoggler3, rqToggler3] = useState(false);
    const [rqtoggler4, rqToggler4] = useState(false);

    return(
        <>
        <Head />
        <section class="games">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <LogoGames />
                        <NavGames />
                        <SocialGames />
                        <LangGames />
                        <ColophonGames />
                    </div>
                    <div class="col-md-8">
                    <section class="games-info">
                        <div class="games-header">
                            <h1 class="games-header-text">
                                game design
                            </h1>
                        </div>
                        <div class="games-info-div">
                            <p class="games-text">
                                <p>For years now I have loved creating levels, encounters, and everything to do with building experiences for players to live through. While building these projects has proven to have taken a very long time, I have a rough technical demo and many concepts showcased here. Certainly enough to sit and discuss them for hours. These projects are currently on hold but they will not be for long!</p>
                                <br />
                                <span className="gametitle">-Somewhere Else-</span>
                                <p>Somewhere Else is an atmospheric first person puzzle exploration game set in the decaying ruins of an unnaturally cheerful city. Shadows and sounds follow you as you make your way to the center of this “Blue Void” to escape.</p>
                                <p>Documentation available on request!</p>
                                <p>Game website: N/A</p>
                                <p className="concept-title">Concept art:</p>
                                {/* se images */}
                                <div className="se-images-div">
                                    <div className="game-img-holder">
                                        <img onClick={()=> seToggler1 (!setoggler1)} className="img img-fluid se-games-img" src="/media/games/thumbnails/drawseconcept2smaller.png" alt="se city concept"/>
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={setoggler1}
                                            sources={[
                                                '/media/games/fullsize/drawseconcept2withnono.png',
                                                '/media/games/fullsize/drawsenonoref1.png',
                                                '/media/games/fullsize/drawseconcept1.png',
                                            ]}
                                        />
                                    </div>
                                    <div className="game-img-holder">
                                        <img onClick={()=> seToggler2 (!setoggler2)} className="img img-fluid se-games-img" src="/media/games/thumbnails/drawsenonoref1smaller.png" alt="nono concept 1"/>
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={setoggler2}
                                            sources={[
                                                '/media/games/fullsize/drawsenonoref1.png',
                                                '/media/games/fullsize/drawseconcept1.png',
                                                '/media/games/fullsize/drawseconcept2withnono.png',
                                            ]}
                                        />
                                    </div>
                                    <div className="game-img-holder">
                                        <img onClick={()=> seToggler3 (!setoggler3)} className="img img-fluid se-games-img" src="/media/games/fullsize/drawseconcept1.png" alt="SE first concept"/>
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={setoggler3}
                                            sources={[
                                                '/media/games/fullsize/drawseconcept1.png',
                                                '/media/games/fullsize/drawseconcept2withnono.png',
                                                '/media/games/fullsize/drawsenonoref1.png',
                                            ]}
                                        />
                                    </div>
                                </div>
                                < br />
                                {/* RQ STARTS HERE */}
                                <span className="gametitle">-Ramen Quest-</span>
                                <p>Ramen Quest is an RPG like with Visual Novel elements. A goofy adventure to go and buy some more ramen!</p>
                                <p>Documentation available on request!</p>
                                <p>Game website: N/A</p>
                                <p className="concept-title">Concept art:</p>
                                <div className="game-img-holder">
                                    <img onClick={()=> rqToggler1 (!rqtoggler1)} className="img img-fluid rq-games-img" src="/media/games/fullsize/drawlogo4.png" alt="Early logo concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler1}
                                        sources={[
                                            '/media/games/fullsize/drawlogo4.png',
                                            '/media/games/fullsize/rqmapearly.png',
                                            '/media/games/fullsize/drawnonodoodles.png',
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                        ]}
                                    />

                                    <img onClick={()=> rqToggler2 (!rqtoggler2)} className="img img-fluid rq-games-img" src="/media/games/fullsize/rqmapearly.png" alt="Early map design concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler2}
                                        sources={[
                                            '/media/games/fullsize/rqmapearly.png',
                                            '/media/games/fullsize/drawnonodoodles.png',
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                            '/media/games/fullsize/drawlogo4.png',
                                        ]}
                                    />
                                    
                                    <img onClick={()=> rqToggler3 (!rqtoggler3)} className="img img-fluid rq-games-img2" src="/media/games/thumbnails/drawnonodoodlessmaller.png" alt="Loading screen doodle"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler3}
                                        sources={[
                                            '/media/games/fullsize/drawnonodoodles.png',
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                            '/media/games/fullsize/drawlogo4.png',
                                            '/media/games/fullsize/rqmapearly.png',
                                        ]}
                                    />

                                    <img onClick={()=> rqToggler4 (!rqtoggler4)} className="img img-fluid rq-games-img2" src="/media/games/thumbnails/drawnonodoodles2smaller.png" alt="Loading screen doodle"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler4}
                                        sources={[
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                            '/media/games/fullsize/drawlogo4.png',
                                            '/media/games/fullsize/rqmapearly.png',
                                            '/media/games/fullsize/drawnonodoodles.png',
                                        ]}
                                    />
                                </div>
                            </p>
                        </div>
                        <div id="nonoDoodleDiv" className="nono-doodle-div">
                            <img id="nonoDoodle" className="d-sm-none d-md-block nono-doodle1 nono-doodle nono-doodle3" src="/media/nonodoodles/drawnonodoodlesite3.png" />
                        </div>
                    </section>
                </div>
                </div>
            </div>
        </section>
        <section className="games-small">
            <HeaderGamesSmall />
            <div class="container">
                    <div class="row">
                        <div class="col">
                            <section class="games-info-small">
                                <div class="games-header-small">
                                    <h1 class="games-header-text">
                                        game design
                                    </h1>
                                </div>
                                <div class="games-info-div-small">
                                    <p class="games-text-small">
                                        <p>For years now I have loved creating levels, encounters, and everything to do with building experiences for players to live through. While building these projects has proven to have taken a very long time, I have a rough technical demo and many concepts showcased here. Certainly enough to sit and discuss them for hours. These projects are currently on hold but they will not be for long!</p>
                                        <br />
                                        <span className="gametitle">-Somewhere Else-</span>
                                        <p>Somewhere Else is an atmospheric first person puzzle exploration game set in the decaying ruins of an unnaturally cheerful city. Shadows and sounds follow you as you make your way to the center of this “Blue Void” to escape.</p>
                                        <p>Documentation available on request!</p>
                                        <p>Game website: N/A</p>
                                        <p className="concept-title">Concept art:</p>
                                        {/* se images */}
                                        <div className="se-images-div">
                                    <div className="game-img-holder">
                                        <img onClick={()=> seToggler1 (!setoggler1)} className="img img-fluid se-games-img" src="/media/games/thumbnails/drawseconcept2smaller.png" alt="se city concept"/>
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={setoggler1}
                                            sources={[
                                                '/media/games/fullsize/drawseconcept2withnono.png',
                                                '/media/games/fullsize/drawsenonoref1.png',
                                                '/media/games/fullsize/drawseconcept1.png',
                                            ]}
                                        />
                                    </div>
                                    <div className="game-img-holder">
                                        <img onClick={()=> seToggler2 (!setoggler2)} className="img img-fluid se-games-img" src="/media/games/thumbnails/drawsenonoref1smaller.png" alt="nono concept 1"/>
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={setoggler2}
                                            sources={[
                                                '/media/games/fullsize/drawsenonoref1.png',
                                                '/media/games/fullsize/drawseconcept1.png',
                                                '/media/games/fullsize/drawseconcept2withnono.png',
                                            ]}
                                        />
                                    </div>
                                    <div className="game-img-holder">
                                        <img onClick={()=> seToggler3 (!setoggler3)} className="img img-fluid se-games-img" src="/media/games/fullsize/drawseconcept1.png" alt="SE first concept"/>
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={setoggler3}
                                            sources={[
                                                '/media/games/fullsize/drawseconcept1.png',
                                                '/media/games/fullsize/drawseconcept2withnono.png',
                                                '/media/games/fullsize/drawsenonoref1.png',
                                            ]}
                                        />
                                    </div>
                                </div>
                                        < br />
                                        {/* RQ STARTS HERE */}
                                        <span className="gametitle">-Ramen Quest-</span>
                                        <p>Ramen Quest is an RPG like with Visual Novel elements. A goofy adventure to go and buy some more ramen!</p>
                                        <p>Documentation available on request!</p>
                                        <p>Game website: N/A</p>
                                        <p className="concept-title">Concept art:</p>
                                        <div className="game-img-holder">
                                    <img onClick={()=> rqToggler1 (!rqtoggler1)} className="img img-fluid rq-games-img" src="/media/games/fullsize/drawlogo4.png" alt="Early logo concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler1}
                                        sources={[
                                            '/media/games/fullsize/drawlogo4.png',
                                            '/media/games/fullsize/rqmapearly.png',
                                            '/media/games/fullsize/drawnonodoodles.png',
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                        ]}
                                    />

                                    <img onClick={()=> rqToggler2 (!rqtoggler2)} className="img img-fluid rq-games-img" src="/media/games/fullsize/rqmapearly.png" alt="Early map design concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler2}
                                        sources={[
                                            '/media/games/fullsize/rqmapearly.png',
                                            '/media/games/fullsize/drawnonodoodles.png',
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                            '/media/games/fullsize/drawlogo4.png',
                                        ]}
                                    />
                                    
                                    <img onClick={()=> rqToggler3 (!rqtoggler3)} className="img img-fluid rq-games-img2" src="/media/games/thumbnails/drawnonodoodlessmaller.png" alt="Loading screen doodle"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler3}
                                        sources={[
                                            '/media/games/fullsize/drawnonodoodles.png',
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                            '/media/games/fullsize/drawlogo4.png',
                                            '/media/games/fullsize/rqmapearly.png',
                                        ]}
                                    />

                                    <img onClick={()=> rqToggler4 (!rqtoggler4)} className="img img-fluid rq-games-img2" src="/media/games/thumbnails/drawnonodoodles2smaller.png" alt="Loading screen doodle"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler4}
                                        sources={[
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                            '/media/games/fullsize/drawlogo4.png',
                                            '/media/games/fullsize/rqmapearly.png',
                                            '/media/games/fullsize/drawnonodoodles.png',
                                        ]}
                                    />
                                </div>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
            </div>
            <ColophonGamesSmall />
        </section>
        </>
    )
}