import React from "react";
import Head from "../../../components/Head/Head"
import LogoArt from "../../../components/Nav Section/Logos/LogoArt";
import NavArt from "../../../components/Nav Section/Navs/NavArt";
import SocialArt from "../../../components/Nav Section/Socials/SocialArt";
import LangArt from "../../../components/Nav Section/Langs/LangArt"
import ColophonArt from "../../../components/Nav Section/Colophons/ColophonArt";
import Script from "next/script";

export default function Art() {
    return (
        <>
        <Head />
        <section class="art">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <LogoArt />
                        <NavArt />
                        <SocialArt />
                        <LangArt />
                        <ColophonArt />
                    </div>
                    <div class="col-md-8">
                        <div class="art-header">
                            <h1 class="art-header-text">
                                art
                            </h1>
                        </div>
                        <div className="art-info">
                            <p className="art-text">
                                This page features a selection of my art. Pieces I am generally happy with. If you'd like to see more, check out my <span className="art-span"><a target="_blank" href="https://twitter.com/WalrusDog">Twitter</a></span> for updates on my art!
                            </p>
                        </div>
                        <div class="art-conts-div">
                            <div class="art-img-sep d-flex">
                                <a class="art-img-tag" href="">
                                    <img id="artImg" class="img img-fluid art-img" src="/media/drawdinner.png" alt="" />
                                </a>
                            </div>
                            <div class="art-img-row d-flex">
                                <div class="art-img-sep">
                                    <a class="art-img-tag" href="">
                                        <img id="artImg" class="img img-fluid art-img mike-drawing" src="/media/drawmiketrain.png" alt="" />
                                    </a>
                                </div>
                                <div class="art-img-sep">
                                    <a class="art-img-tag" href="">
                                        <img id="artImg" class="img img-fluid art-img" src="/media/drawbanki.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="art-img-sep d-flex">
                                <a class="art-img-tag" href="">
                                    <img id="artImg" class="img img-fluid art-img" src="/media/drawpole.png" alt="" />
                                </a>
                            </div>
                            <div class="art-img-row d-flex">
                                <div class="art-img-sep">
                                    <a class="art-img-tag" href="">
                                        <img id="artImg" class="img img-fluid art-img" src="/media/drawbleachers.png" alt="" />
                                    </a>
                                </div>
                                <div class="art-img-sep d-flex">
                                    <a class="art-img-tag" href="">
                                        <img id="artImg" class="img img-fluid art-img" src="/media/drawsneaky.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="art-img-sep d-flex">
                                <a class="art-img-tag" href="">
                                    <img onClick="enlargeImg" id="artImg" class="img img-fluid art-img" src="/media/drawstairs.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Script>
        
        </Script>
        </>
    )
}