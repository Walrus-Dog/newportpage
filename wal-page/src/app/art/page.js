import React from "react";
import Head from "../../../components/Head/Head"
import LogoArt from "../../../components/Nav Section/Logos/LogoArt";
import NavArt from "../../../components/Nav Section/Navs/NavArt";
import SocialArt from "../../../components/Nav Section/Socials/SocialArt";
import LangArt from "../../../components/Nav Section/Langs/LangArt"
import ColophonArt from "../../../components/Nav Section/Colophons/ColophonArt";

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
                <div class="col-md-8 art-conts-div">
                    <div class="art-img-sep">
                        <a class="art-img-tag" href="">
                            <img class="img img-fluid art-img" src="/media/drawdinner.png" alt="" />
                        </a>
                    </div>
                    <div class="art-img-row d-flex">
                        <div class="art-img-sep">
                            <a class="art-img-tag" href="">
                                <img class="img img-fluid art-img mike-drawing" src="/media/drawmiketrain.png" alt="" />
                            </a>
                        </div>
                        <div class="art-img-sep">
                            <a class="art-img-tag" href="">
                                <img class="img img-fluid art-img" src="/media/drawbanki.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div class="art-img-sep">
                        <a class="art-img-tag" href="">
                            <img class="img img-fluid art-img" src="/media/drawpole.png" alt="" />
                        </a>
                    </div>
                    <div class="art-img-row d-flex">
                        <div class="art-img-sep">
                            <a class="art-img-tag" href="">
                                <img class="img img-fluid art-img" src="/media/drawbleachers.png" alt="" />
                            </a>
                        </div>
                        <div class="art-img-sep">
                            <a class="art-img-tag" href="">
                                <img class="img img-fluid art-img" src="/media/drawsneaky.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div class="art-img-sep">
                        <a class="art-img-tag" href="">
                            <img class="img img-fluid art-img" src="/media/drawstairs.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}