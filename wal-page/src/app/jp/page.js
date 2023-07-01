import React from "react";
import Head from "../../../components/Head/Head";
import LogoJp from "../../../components/Nav Section/Logos/LogoJp";
import NavJp from "../../../components/Nav Section/Navs/NavJp";
import Social from "../../../components/Nav Section/Socials/Social";
import Lang from "../../../components/Nav Section/Langs/Lang";
import Colophon from "../../../components/Nav Section/Colophons/Colophon";

export default function Jp() {
    return(
        <>
        <Head />
            <section class="jp">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <LogoJp />
                            <NavJp />
                            <Social />
                            <Lang />
                            <Colophon />
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
                                        test
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
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