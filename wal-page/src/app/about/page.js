import React from "react";
import Head from "../../../components/Head/Head"
import LogoLanding from "../../../components/Nav Section/Logos/LogoLanding"
import NavAbout from "../../../components/Nav Section/Navs/NavAbout";
import Social from "../../../components/Nav Section/Socials/Social"
import Lang from "../../../components/Nav Section/Langs/Lang"
import Colophon from "../../../components/Nav Section/Colophons/Colophon"

export default function About() {
    return(
        <>
        <Head />
        <section class="about">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                            <LogoLanding />
                            <NavAbout />
                            <Social />
                            <Lang />
                            <Colophon />
                    </div>
                    <div class="col-md-8">
                        <section class="about-info">
                            <div class="about-header">
                                <h1 class="about-header-text">
                                    about
                                </h1>
                            </div>
                            <div class="about-info-div">
                                <p class="about-text">
                                    <p>Hello there!</p>
                                    <p>My name is Patrick. I go by WalrusDog as my sort of brand and online handle. I am a creator, developer and an artist.</p>
                                    <p>I graduated from Mississippi Coding Academies in 2022 and hold a passion for web development/design, game design and art. I find I am better at creative things, but I’m not afraid to tackle something more technical. I am of the belief that anyone can learn anything and take that seriously when presented with challenges.</p>
                                    <p>Everything you see on this page as far as art was made by me! I have been learning digital painting and digital design so that I can make my own art and assets for my games.</p>
                                    <p>I am in the process of making my first full video game, check back here, on the game specific website, or my twitter for updates!</p>
                                    <p>If you would like more information, please send me an email, or message on social media. Hope we can make something cool together! </p>
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