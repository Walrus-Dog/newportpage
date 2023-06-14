import React from "react";
import Head from "../../../components/Head/Head";
import LogoWebdev from "../../../components/Nav Section/Logos/LogoWebdev";
import NavWebdev from "../../../components/Nav Section/Navs/NavWebdev";
import SocialWebdev from "../../../components/Nav Section/Socials/SocialWebdev";
import LangWebdev from "../../../components/Nav Section/Langs/LangWebdev";
import ColophonWebdev from "../../../components/Nav Section/Colophons/ColophonWebdev";

export default function WebDev() {
    return(
        <>
        <Head />
        <section class="webdev">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <LogoWebdev />
                        <NavWebdev />
                        <SocialWebdev />
                        <LangWebdev />
                        <ColophonWebdev />
                    </div>
                    <div class="col-md-8">
                        <section class="webdev-info">
                            <div class="webdev-header">
                                <h1 class="webdev-header-text">
                                    web dev
                                </h1>
                            </div>
                            <div class="webdev-info-div">
                                <p class="webdev-text">
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