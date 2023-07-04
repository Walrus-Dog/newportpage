import React from "react";
import Head from "../../../components/Head/Head"
import LogoArtJp from "../../../components/Nav Sec Jp/Logos/LogoArtJp";
import NavArtJp from "../../../components/Nav Sec Jp/Navs/NavArtJp";
import SocialArtJp from "../../../components/Nav Sec Jp/Socials/SocialArtJp";
import LangArt from "../../../components/Nav Section/Langs/LangArt"
import ColophonArtJp from "../../../components/Nav Sec Jp/Colophons/ColophonArtJp";

export default function ArtJp() {
    return (
        <>
        <Head />
        <section class="art">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <LogoArtJp />
                        <NavArtJp />
                        <SocialArtJp />
                        <LangArt />
                        <ColophonArtJp />
                    </div>
                    <div class="col-md-8">
                        <div class="art-header">
                            <h1 class="art-header-text">
                                アート
                            </h1>
                        </div>
                        <div className="art-info">
                            <p className="art-text">
                                このページでは、私のアートの一部を紹介します。私が概ね満足している作品です。もっと見たい方は、私の<span className="art-span"><a target="_blank" href="https://twitter.com/WalrusDog">ツイッター</a></span>で最新情報をチェックしてください！
                            </p>
                        </div>
                        <div class="art-conts-div">
                            <div class="art-img-sep d-flex">
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
                            <div class="art-img-sep d-flex">
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
                                <div class="art-img-sep d-flex">
                                    <a class="art-img-tag" href="">
                                        <img class="img img-fluid art-img" src="/media/drawsneaky.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="art-img-sep d-flex">
                                <a class="art-img-tag" href="">
                                    <img class="img img-fluid art-img" src="/media/drawstairs.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}