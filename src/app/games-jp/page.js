"use client"
import React, { useState } from "react";
import Head from "../../../components/Head/Head";
import LogoGamesJp from "../../../components/Nav Sec Jp/Logos/LogoGamesJp";
import NavGamesJp from "../../../components/Nav Sec Jp/Navs/NavGamesJp";
import SocialGamesJp from "../../../components/Nav Sec Jp/Socials/SocialGamesJp";
import LangGames from "../../../components/Nav Section/Langs/LangGames";
import ColophonGamesJp from "../../../components/Nav Sec Jp/Colophons/ColophonGamesJp";
import FsLightbox from "fslightbox-react";
import ColophonGamesSmallJp from "../../../components/NavSecSmallJp/ColophonSmallJp/ColophonGamesSmallJp";
import HeaderGamesSmallJp from "../../../components/NavSecSmallJp/HeadersJp/HeaderGamesSmallJp";

export default function GamesJp() {

    const [setoggler1, seToggler1] = useState(false);
    const [setoggler2, seToggler2] = useState(false);
    const [setoggler3, seToggler3] = useState(false);
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
                                <p>ここ何年もの間、私はレベルやエンカウンターなど、プレイヤーが生き抜くための経験を構築することに関するあらゆるものを作るのが好きだった。これらのプロジェクトの構築には非常に長い時間がかかったことが証明されているが、私はここに大まかな技術デモと多くのコンセプトを披露している。確かに、何時間も座って議論するには十分だ。これらのプロジェクトは現在保留中だが、長くは続かないだろう！</p>
                                <br />
                                <span className="gametitle">-別のどこ-</span>
                                <p>別のどこは、不自然なほど陽気な街の朽ち果てた廃墟を舞台にした、雰囲気のある一人称視点のパズル探索ゲームだ。影と音があなたを追いかけながら、この「青い空洞」の中心部へと脱出を目指す。</p>
                                <p>資料請求も可能！</p>
                                <p>ゲームのウェブサイト： 該当なし</p>
                                <p className="concept-title">コンセプトアート：</p>
                                <div className="se-images-div">
                                    <div className="game-img-holder">
                                        <img onClick={()=> seToggler1 (!setoggler1)} className="img img-fluid se-games-img" src="/media/games/thumbnails/drawseconcept2smaller.png" alt="se city concept"/>
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={setoggler1}
                                            sources={[
                                                '/media/games/fullsize/drawseconcept2withnono.png',
                                                '/media/games/fullsize/drawsenonoref1.png',
                                                '/media/games/fullsize/drawseconcept1.png',
                                            ]}
                                        />
                                    </div>
                                    <div className="game-img-holder">
                                        <img onClick={()=> seToggler2 (!setoggler2)} className="img img-fluid se-games-img" src="/media/games/thumbnails/drawsenonoref1smaller.png" alt="nono concept 1"/>
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={setoggler2}
                                            sources={[
                                                '/media/games/fullsize/drawsenonoref1.png',
                                                '/media/games/fullsize/drawseconcept1.png',
                                                '/media/games/fullsize/drawseconcept2withnono.png',
                                            ]}
                                        />
                                    </div>
                                    <div className="game-img-holder">
                                        <img onClick={()=> seToggler3 (!setoggler3)} className="img img-fluid se-games-img" src="/media/games/fullsize/drawseconcept1.png" alt="SE first concept"/>
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={setoggler3}
                                            sources={[
                                                '/media/games/fullsize/drawseconcept1.png',
                                                '/media/games/fullsize/drawseconcept2withnono.png',
                                                '/media/games/fullsize/drawsenonoref1.png',
                                            ]}
                                        />
                                    </div>
                                </div>
                                <br />
                                <span className="gametitle">-ラメン大冒険-</span>
                                <p>ビジュアルノベル要素のあるRPG風。ラーメンを買いに行くためのベタな冒険！</p>
                                <p>資料請求も可能！</p>
                                <p>ゲームのウェブサイト： 該当なし</p>
                                <p className="concept-title">コンセプトアート：</p>
                                <div className="game-img-holder">
                                    <img onClick={()=> rqToggler1 (!rqtoggler1)} className="img img-fluid rq-games-img" src="/media/games/fullsize/drawlogo4.png" alt="Early logo concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler1}
                                        sources={[
                                            '/media/games/fullsize/drawlogo4.png',
                                            '/media/games/fullsize/rqmapearly.png',
                                            '/media/games/fullsize/drawnonodoodles.png',
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                        ]}
                                    />

                                    <img onClick={()=> rqToggler2 (!rqtoggler2)} className="img img-fluid rq-games-img" src="/media/games/fullsize/rqmapearly.png" alt="Early map design concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler2}
                                        sources={[
                                            '/media/games/fullsize/rqmapearly.png',
                                            '/media/games/fullsize/drawnonodoodles.png',
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                            '/media/games/fullsize/drawlogo4.png',
                                        ]}
                                    />
                                    
                                    <img onClick={()=> rqToggler3 (!rqtoggler3)} className="img img-fluid rq-games-img2" src="/media/games/thumbnails/drawnonodoodlessmaller.png" alt="Loading screen doodle"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler3}
                                        sources={[
                                            '/media/games/fullsize/drawnonodoodles.png',
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                            '/media/games/fullsize/drawlogo4.png',
                                            '/media/games/fullsize/rqmapearly.png',
                                        ]}
                                    />

                                    <img onClick={()=> rqToggler4 (!rqtoggler4)} className="img img-fluid rq-games-img2" src="/media/games/thumbnails/drawnonodoodles2smaller.png" alt="Loading screen doodle"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler4}
                                        sources={[
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                            '/media/games/fullsize/drawlogo4.png',
                                            '/media/games/fullsize/rqmapearly.png',
                                            '/media/games/fullsize/drawnonodoodles.png',
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
        <section className="games-small">
            <HeaderGamesSmallJp />
            <div class="container">
                    <div class="row">
                        <div class="col">
                            <section class="games-info-small">
                                <div class="games-header-small">
                                    <h1 class="games-header-text">
                                        ゲームデザイン
                                    </h1>
                                </div>
                                <div class="games-info-div-small">
                                    <p class="games-text-small">
                                    <p>ここ何年もの間、私はレベルやエンカウンターなど、プレイヤーが生き抜くための経験を構築することに関するあらゆるものを作るのが好きだった。これらのプロジェクトの構築には非常に長い時間がかかったことが証明されているが、私はここに大まかな技術デモと多くのコンセプトを披露している。確かに、何時間も座って議論するには十分だ。これらのプロジェクトは現在保留中だが、長くは続かないだろう！</p>
                                    <br />
                                    <span className="gametitle">-別のどこ-</span>
                                    <p>別のどこは、不自然なほど陽気な街の朽ち果てた廃墟を舞台にした、雰囲気のある一人称視点のパズル探索ゲームだ。影と音があなたを追いかけながら、この「青い空洞」の中心部へと脱出を目指す。</p>
                                    <p>資料請求も可能！</p>
                                    <p>ゲームのウェブサイト： 該当なし</p>
                                    <p className="concept-title">コンセプトアート：</p>
                                        {/* se images */}
                                        <div className="se-images-div">
                                    <div className="game-img-holder">
                                        <img onClick={()=> seToggler1 (!setoggler1)} className="img img-fluid se-games-img" src="/media/games/thumbnails/drawseconcept2smaller.png" alt="se city concept"/>
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={setoggler1}
                                            sources={[
                                                '/media/games/fullsize/drawseconcept2withnono.png',
                                                '/media/games/fullsize/drawsenonoref1.png',
                                                '/media/games/fullsize/drawseconcept1.png',
                                            ]}
                                        />
                                    </div>
                                    <div className="game-img-holder">
                                        <img onClick={()=> seToggler2 (!setoggler2)} className="img img-fluid se-games-img" src="/media/games/thumbnails/drawsenonoref1smaller.png" alt="nono concept 1"/>
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={setoggler2}
                                            sources={[
                                                '/media/games/fullsize/drawsenonoref1.png',
                                                '/media/games/fullsize/drawseconcept1.png',
                                                '/media/games/fullsize/drawseconcept2withnono.png',
                                            ]}
                                        />
                                    </div>
                                    <div className="game-img-holder">
                                        <img onClick={()=> seToggler3 (!setoggler3)} className="img img-fluid se-games-img" src="/media/games/fullsize/drawseconcept1.png" alt="SE first concept"/>
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={setoggler3}
                                            sources={[
                                                '/media/games/fullsize/drawseconcept1.png',
                                                '/media/games/fullsize/drawseconcept2withnono.png',
                                                '/media/games/fullsize/drawsenonoref1.png',
                                            ]}
                                        />
                                    </div>
                                </div>
                                        < br />
                                        {/* RQ STARTS HERE */}
                                        <span className="gametitle">-ラメン大冒険-</span>
                                    <p>ビジュアルノベル要素のあるRPG風。ラーメンを買いに行くためのベタな冒険！</p>
                                    <p>資料請求も可能！</p>
                                    <p>ゲームのウェブサイト： 該当なし</p>
                                    <p className="concept-title">コンセプトアート：</p>
                                    <div className="game-img-holder">
                                    <img onClick={()=> rqToggler1 (!rqtoggler1)} className="img img-fluid rq-games-img" src="/media/games/fullsize/drawlogo4.png" alt="Early logo concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler1}
                                        sources={[
                                            '/media/games/fullsize/drawlogo4.png',
                                            '/media/games/fullsize/rqmapearly.png',
                                            '/media/games/fullsize/drawnonodoodles.png',
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                        ]}
                                    />

                                    <img onClick={()=> rqToggler2 (!rqtoggler2)} className="img img-fluid rq-games-img" src="/media/games/fullsize/rqmapearly.png" alt="Early map design concept"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler2}
                                        sources={[
                                            '/media/games/fullsize/rqmapearly.png',
                                            '/media/games/fullsize/drawnonodoodles.png',
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                            '/media/games/fullsize/drawlogo4.png',
                                        ]}
                                    />
                                    
                                    <img onClick={()=> rqToggler3 (!rqtoggler3)} className="img img-fluid rq-games-img2" src="/media/games/thumbnails/drawnonodoodlessmaller.png" alt="Loading screen doodle"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler3}
                                        sources={[
                                            '/media/games/fullsize/drawnonodoodles.png',
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                            '/media/games/fullsize/drawlogo4.png',
                                            '/media/games/fullsize/rqmapearly.png',
                                        ]}
                                    />

                                    <img onClick={()=> rqToggler4 (!rqtoggler4)} className="img img-fluid rq-games-img2" src="/media/games/thumbnails/drawnonodoodles2smaller.png" alt="Loading screen doodle"/>
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={rqtoggler4}
                                        sources={[
                                            '/media/games/fullsize/drawnonodoodles2.png',
                                            '/media/games/fullsize/drawlogo4.png',
                                            '/media/games/fullsize/rqmapearly.png',
                                            '/media/games/fullsize/drawnonodoodles.png',
                                        ]}
                                    />
                                </div>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
            </div>
            <ColophonGamesSmallJp />
        </section>
        </>
    )
}