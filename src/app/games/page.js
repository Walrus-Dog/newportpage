"use client"
import React, { useState } from "react";
import Head from "../../../components/Head/Head";
import LogoGames from "../../../components/Nav Section/Logos/LogoGames";
import NavGames from "../../../components/Nav Section/Navs/NavGames";
import SocialGames from "../../../components/Nav Section/Socials/SocialGames";
import LangGames from "../../../components/Nav Section/Langs/LangGames";
import ColophonGames from "../../../components/Nav Section/Colophons/ColophonGames";
import FsLightbox from "fslightbox-react";

export default function Games() {

    const [setoggler1, seToggler1] = useState(false);
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
                                <p>Design is one of my main passions. I love creating levels, encounters, everything to do with building experiences for players to live through. While building these projects has proven to have taken a very long time, I still have them on paper. Below are the two games that are in production, but rest assured there are at least 7 other games in the pipeline.</p>
                                <p>For more information on any of these projects, please contact me!</p>
                                <br />
                                <span className="gametitle">-Somewhere Else-</span>
                                <p>Atmospheric first person puzzle game. A spooky puzzler intended to suck the player into the world and let them experience the rush of exploration.</p>
                                <p>Documentation available on request!</p>
                                <p>Game website: N/A</p>
                                <p className="concept-title">Concept art:</p>
                                <div className="game-img-holder">
                                    <img onClick={()=> seToggler1 (!setoggler1)} className="img img-fluid games-img" src="/media/games-art/drawseconcept1.png" alt="SE first concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={setoggler1}
                                        sources={[
                                            '/media/games-art/drawseconcept1.png',
                                        ]}
                                    />
                                </div>
                                < br />
                                <span className="gametitle">-Ramen Quest-</span>
                                <p>RPG like, with Visual Novel elements. A goofy adventure to go and buy some more ramen!</p>
                                <p>Documentation available on request!</p>
                                <p>Game website: N/A</p>
                                <p className="concept-title">Concept art:</p>
                                <div className="game-img-holder">
                                    <img onClick={()=> rqToggler1 (!rqtoggler1)} className="img img-fluid games-img" src="/media/games-art/drawlogo4.png" alt="Early logo concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler1}
                                        sources={[
                                            '/media/games-art/drawlogo4.png',
                                            '/media/games-art/rqmapearly.png',
                                            '/media/games-art/drawnonodoodles.png',
                                            '/media/games-art/drawnonodoodles2.png',
                                        ]}
                                    />

                                    <img onClick={()=> rqToggler2 (!rqtoggler2)} className="img img-fluid games-img" src="/media/games-art/rqmapearly.png" alt="Early map design concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler2}
                                        sources={[
                                            '/media/games-art/rqmapearly.png',
                                            '/media/games-art/drawnonodoodles.png',
                                            '/media/games-art/drawnonodoodles2.png',
                                            '/media/games-art/drawlogo4.png',
                                        ]}
                                    />
                                    
                                    <img onClick={()=> rqToggler3 (!rqtoggler3)} className="img img-fluid games-img2" src="/media/games-art/drawnonodoodles.png" alt="Loading screen doodle"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler3}
                                        sources={[
                                            '/media/games-art/drawnonodoodles.png',
                                            '/media/games-art/drawnonodoodles2.png',
                                            '/media/games-art/drawlogo4.png',
                                            '/media/games-art/rqmapearly.png',
                                        ]}
                                    />

                                    <img onClick={()=> rqToggler4 (!rqtoggler4)} className="img img-fluid games-img2" src="/media/games-art/drawnonodoodles2.png" alt="Loading screen doodle"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler4}
                                        sources={[
                                            '/media/games-art/drawnonodoodles2.png',
                                            '/media/games-art/drawlogo4.png',
                                            '/media/games-art/rqmapearly.png',
                                            '/media/games-art/drawnonodoodles.png',
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
        </>
    )
}