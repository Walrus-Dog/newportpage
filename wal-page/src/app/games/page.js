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
                                test
                            </p>
                        </div>
                    </section>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}