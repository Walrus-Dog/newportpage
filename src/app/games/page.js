import React from "react";
import Head from "../../../components/Head/Head";
import LogoGames from "../../../components/Nav Section/Logos/LogoGames";
import NavGames from "../../../components/Nav Section/Navs/NavGames";
import SocialGames from "../../../components/Nav Section/Socials/SocialGames";
import LangGames from "../../../components/Nav Section/Langs/LangGames";
import ColophonGames from "../../../components/Nav Section/Colophons/ColophonGames";

export default function Games() {
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
                                <img className="img img-fluid games-img" src="/media/games-art/drawseconcept1.png" alt="SE first concept"/>
                                < br />
                                <span className="gametitle">-Ramen Quest-</span>
                                <p>RPG like, with Visual Novel elements. A goofy adventure to go and buy some more ramen!</p>
                                <p>Documentation available on request!</p>
                                <p>Game website: N/A</p>
                                <p className="concept-title">Concept art:</p>
                                <a href="">
                                    <img className="img img-fluid games-img" src="/media/games-art/drawlogo4.png" alt="Early logo concept"/>
                                </a>
                                <a href="">
                                    <img className="img img-fluid games-img" src="/media/games-art/rqmapearly.png" alt="Early map design concept"/>
                                </a>
                                <a href="">
                                    <img className="img img-fluid games-img2" src="/media/games-art/drawnonodoodles.png" alt="Loading screen doodle"/>
                                </a>
                                <a href="">
                                    <img className="img img-fluid games-img2" src="/media/games-art/drawnonodoodles2.png" alt="Loading screen doodle"/>
                                </a>
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