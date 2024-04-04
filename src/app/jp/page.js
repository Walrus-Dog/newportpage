"use client"
import React, { useState } from "react";
import Head from "../../../components/Head/Head";
import LogoJp from "../../../components/Nav Section/Logos/LogoJp";
import NavJp from "../../../components/Nav Section/Navs/NavJp";
import SocialAbout from "../../../components/Nav Section/Socials/SocialAbout";
import LangJp from "../../../components/Nav Section/Langs/LangJp";
import ColophonAbout from "../../../components/Nav Section/Colophons/ColophonAbout";
import HeaderJpSmall from "../../../components/NavSecSmall/Headers/HeaderJpSmall";
import ColophonSmallJp from "../../../components/NavSecSmall/ColophonSmall/ColophonSmallJp";

export default function Jp() {
    return (
        <>
            <Head />
            <section class="jp">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <LogoJp />
                            <NavJp />
                            <SocialAbout />
                            <LangJp />
                            <ColophonAbout />
                        </div>
                        <div class="col-md-8">
                            <section class="jp-info">
                                <div class="jp-header">
                                    <h1 class="jp-header-text">
                                        japanese
                                    </h1>
                                </div>
                                <div class="jp-info-div">
                                    <p class="jp-text">
                                        <p>In late 2014 I decided I was going to learn a foreign language, and while on paper I have been learning since 2014, due to school, working, and various other factors, I have only studied for around 3 years in total. Recently however, I am picking up my studies in earnest again, as I hope to take and pass the JLPT 5, 4 and maybe 3 this year (2024).</p>
                                        <p>My original goal of learning this language is far gone by now, and my goal has shifted to being able to use my skills in Japanese to get a job in Japan and perhaps eventually move to the country. I am hoping within a year or two to be able to travel to Japan for the first time, something I have been excitedly working towards for a very long time now.</p>
                                    </p>
                                </div>
                                <div id="nonoDoodleDiv" className="nono-doodle-div">
                                    <img id="nonoDoodle" className="d-sm-none d-md-block nono-doodle1 nono-doodle nono-doodle4" src="/media/nonodoodles/drawnonodoodlesite4.png" />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <section className="jp-small">
                <HeaderJpSmall />
                <div className="container">
                    <div className="row">
                        <section class="jp-info">
                            <div class="jp-header-small">
                                <h1 class="jp-header-text">
                                    japanese
                                </h1>
                            </div>
                            <div class="jp-info-div-small">
                                <p class="jp-text-small">
                                    <p>In late 2014 I decided I was going to learn a foreign language, and while on paper I have been learning since 2014, due to school, working, and various other factors, I have only studied for around 3 years in total. Recently however, I am picking up my studies in earnest again, as I hope to take and pass the JLPT 5, 4 and maybe 3 this year (2024).</p>
                                    <p>My original goal of learning this language is far gone by now, and my goal has shifted to being able to use my skills in Japanese to jet a job in Japan and perhaps eventually move to the country. I am hoping within a year or two to be able to travel to Japan for the first time, something I have been excitedly working towards for a very long time now.</p>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
                <ColophonSmallJp />
            </section>
        </>
    )
}