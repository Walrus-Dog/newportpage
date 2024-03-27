"use client"
import React from "react";
import Head from "../../../components/Head/Head";
import LogoAbout from "../../../components/Nav Section/Logos/LogoAbout";
import NavAbout from "../../../components/Nav Section/Navs/NavAbout";
import SocialAbout from "../../../components/Nav Section/Socials/SocialAbout";
import LangAbout from "../../../components/Nav Section/Langs/LangAbout";
import ColophonAbout from "../../../components/Nav Section/Colophons/ColophonAbout";
import HeaderSmall from "../../../components/NavSecSmall/Headers/HeaderSmall";
import ColophonSmall from "../../../components/NavSecSmall/ColophonSmall/ColophonSmall";

export default function About() {

    return(
        <>
        <Head />
        <section class="about">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                            <LogoAbout />
                            <NavAbout />
                            <SocialAbout />
                            <LangAbout />
                            <ColophonAbout />
                    </div>
                    <div class="col-md-8 about-div">
                        <section class="about-info">
                            <div class="about-header">
                                <h1 class="about-header-text">
                                    about
                                </h1>
                            </div>
                            <div class="about-info-div">
                                <p class="about-text">
                                    <p>Hello there!</p>
                                    <p>My name is Patrick, also known as WalrusDog online. I am a web developer dipping my toes into the game dev and digital art scene. Despite my growing skillset, I am a ravenous learner and I tend to think my creative side helps me out even in my technical work.</p>
                                    <p>I graduated from Mississippi Coding Academies in 2022 and I am very passionate about many different types of projects. I am currently proficient in HTML, CSS, JS, NEXT, React, C#, Unity, Python, MySQL, and I am willing to learn wnew and exciting toolsets to finish many types of projects</p>
                                    <p>I created this website to showcase my various interests including examples of my art, various game and web dev projects, and even my journey in becoming a fluent Japanese speaker. I hope you enjoy exploring my adventures as much as I have enjoyed creating them.</p>
                                    <p>If you are interested in contacting me about anything you see on my website, if you are interested in working on a project together, or interested in hiring me, please reach me by email at <span className="about-email"><a href="">walrusdog@gmail.com</a></span>.</p>
                                </p>
                            </div>
                            <div id="nonoDoodleDiv" className="nono-doodle-div">
                                <img id="nonoDoodle" className="d-sm-none d-md-block nono-doodle1 nono-doodle" src="/media/nonodoodles/drawnonodoodlesite1.png" />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        <section className="about-small">
            <HeaderSmall />
            <div className="container">
                <div className="row">
                    <section class="about-info-small">
                        <div class="about-header-small">
                            <h1 class="about-header-text">
                                about
                            </h1>
                        </div>
                        <div class="about-info-div-small">
                            <p class="about-text">
                                <p>Hello there!</p>
                                <p>My name is Patrick, also known as WalrusDog online. I am a web developer dipping my toes into the game dev and digital art scene. Despite my growing skillset, I am a ravenous learner and I tend to think my creative side helps me out even in my technical work.</p>
                                <p>I graduated from Mississippi Coding Academies in 2022 and I am very passionate about many different types of projects. I am currently proficient in HTML, CSS, JS, NEXT, React, C#, Unity, Python, MySQL, and I am willing to learn new and exciting toolsets to finish many types of projects</p>
                                <p>I created this website to showcase my various interests including examples of my art, various game and web dev projects, and even my journey in becoming a fluent Japanese speaker. I hope you enjoy exploring my adventures as much as I have enjoyed creating them.</p>
                                <p>If you are interested in contacting me about anything you see on my website, if you are interested in working on a project together, or interested in hiring me, please reach me by email at <span className="about-email"><a href="">walrusdog@gmail.com</a></span>.</p>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <ColophonSmall />
        </section>
        </>
    )
}