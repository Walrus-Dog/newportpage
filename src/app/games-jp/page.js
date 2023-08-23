"use client"
import React, { useState } from "react";
import Head from "../../../components/Head/Head";
import LogoGamesJp from "../../../components/Nav Sec Jp/Logos/LogoGamesJp";
import NavGamesJp from "../../../components/Nav Sec Jp/Navs/NavGamesJp";
import SocialGamesJp from "../../../components/Nav Sec Jp/Socials/SocialGamesJp";
import LangGames from "../../../components/Nav Section/Langs/LangGames";
import ColophonGamesJp from "../../../components/Nav Sec Jp/Colophons/ColophonGamesJp";
import FsLightbox from "fslightbox-react";

export default function GamesJp() {

    const [setoggler1, seToggler1] = useState(false);
    const [rqtoggler1, rqToggler1] = useState(false);
    const [rqtoggler2, rqToggler2] = useState(false);
    const [rqtoggler3, rqToggler3] = useState(false);
    const [rqtoggler4, rqToggler4] = useState(false);

    return(
        <>
        <Head />
        <section class="games">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <LogoGamesJp />
                        <NavGamesJp />
                        <SocialGamesJp />
                        <LangGames />
                        <ColophonGamesJp />
                    </div>
                    <div class="col-md-8">
                    <section class="games-info">
                        <div class="games-header">
                            <h1 class="games-header-text">
                                ゲームデザイン
                            </h1>
                        </div>
                        <div class="games-info-div">
                            <p class="games-text">
                                <p>デザインは私の主な情熱のひとつだ。レベルやエンカウンターなど、プレイヤーが生き抜くための体験を構築することすべてが好きだ。これらのプロジェクトの構築には非常に長い時間がかかることが証明されているが、私はまだそれらを紙の上に持っている。以下は製作中の2つのゲームだが、少なくとも7つのゲームが準備中なので安心してほしい。</p>
                                <br />
                                <p>これらのプロジェクトの詳細については、私にご連絡ください！</p>
                                <br />
                                <span className="gametitle">-別のどこ-</span>
                                <p>雰囲気たっぷりの一人称視点パズルゲーム。不気味なパズルゲームで、プレイヤーを世界に吸い込み、探索の醍醐味を味わわせよう。</p>
                                <p>資料請求も可能！</p>
                                <p>ゲームのウェブサイト： 該当なし</p>
                                <p className="concept-title">コンセプトアート：</p>
                                <div className="game-img-holder">
                                    <img onClick={()=> seToggler1 (!setoggler1)} className="img img-fluid games-img" src="/media/games-art/drawseconcept1.png" alt="SE first concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={setoggler1}
                                        sources={[
                                            '/media/games-art/drawseconcept1.png',
                                        ]}
                                    />
                                </div>
                                <br />
                                <span className="gametitle">-ラメン大冒険-</span>
                                <p>ビジュアルノベル要素のあるRPG風。ラーメンを買いに行くためのベタな冒険！</p>
                                <p>資料請求も可能！</p>
                                <p>ゲームのウェブサイト： 該当なし</p>
                                <p className="concept-title">コンセプトアート：</p>
                                <div className="game-img-holder">
                                    <img onClick={()=> rqToggler1 (!rqtoggler1)} className="img img-fluid games-img" src="/media/games-art/drawlogo4.png" alt="Early logo concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler1}
                                        sources={[
                                            '/media/games-art/drawlogo4.png',
                                            '/media/games-art/rqmapearly.png',
                                            '/media/games-art/drawnonodoodles.png',
                                            '/media/games-art/drawnonodoodles2.png',
                                        ]}
                                    />

                                    <img onClick={()=> rqToggler2 (!rqtoggler2)} className="img img-fluid games-img" src="/media/games-art/rqmapearly.png" alt="Early map design concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler2}
                                        sources={[
                                            '/media/games-art/rqmapearly.png',
                                            '/media/games-art/drawnonodoodles.png',
                                            '/media/games-art/drawnonodoodles2.png',
                                            '/media/games-art/drawlogo4.png',
                                        ]}
                                    />
                                    
                                    <img onClick={()=> rqToggler3 (!rqtoggler3)} className="img img-fluid games-img2" src="/media/games-art/drawnonodoodles.png" alt="Loading screen doodle"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler3}
                                        sources={[
                                            '/media/games-art/drawnonodoodles.png',
                                            '/media/games-art/drawnonodoodles2.png',
                                            '/media/games-art/drawlogo4.png',
                                            '/media/games-art/rqmapearly.png',
                                        ]}
                                    />

                                    <img onClick={()=> rqToggler4 (!rqtoggler4)} className="img img-fluid games-img2" src="/media/games-art/drawnonodoodles2.png" alt="Loading screen doodle"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler4}
                                        sources={[
                                            '/media/games-art/drawnonodoodles2.png',
                                            '/media/games-art/drawlogo4.png',
                                            '/media/games-art/rqmapearly.png',
                                            '/media/games-art/drawnonodoodles.png',
                                        ]}
                                    />
                                </div>
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