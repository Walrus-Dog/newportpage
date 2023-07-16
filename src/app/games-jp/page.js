import React from "react";
import Head from "../../../components/Head/Head";
import LogoGamesJp from "../../../components/Nav Sec Jp/Logos/LogoGamesJp";
import NavGamesJp from "../../../components/Nav Sec Jp/Navs/NavGamesJp";
import SocialGamesJp from "../../../components/Nav Sec Jp/Socials/SocialGamesJp";
import LangGames from "../../../components/Nav Section/Langs/LangGames";
import ColophonGamesJp from "../../../components/Nav Sec Jp/Colophons/ColophonGamesJp";

export default function GamesJp() {
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
                                <span className="gametitle">-ラメン大冒険-</span>
                                <p>ビジュアルノベル要素のあるRPG風。ラーメンを買いに行くためのベタな冒険！</p>
                                <p>資料請求も可能！</p>
                                <p>ゲームのウェブサイト： 該当なし</p>
                                <p className="concept-title">コンセプトアート：</p>
                                <a href="">
                                    <img className="img img-fluid games-img" src="/media/games-art/drawlogo4.png" alt="Early logo concept"/>
                                </a>
                                <a href="">
                                    <img className="img img-fluid games-img" src="/media/games-art/rqmapearly.png" alt="Early map design concept"/>
                                </a>
                                <a href="">
                                    <img className="img img-fluid games-img2" src="/media/games-art/drawnonodoodles.png" alt="Loading screen doodle"/>
                                </a>
                                <a href="">
                                    <img className="img img-fluid games-img2" src="/media/games-art/drawnonodoodles2.png" alt="Loading screen doodle"/>
                                </a>
                                <br />
                                <span className="gametitle">-別のどこ-</span>
                                <p>雰囲気たっぷりの一人称視点パズルゲーム。不気味なパズルゲームで、プレイヤーを世界に吸い込み、探索の醍醐味を味わわせよう。</p>
                                <p>資料請求も可能！</p>
                                <p>ゲームのウェブサイト： 該当なし</p>
                                <p>現時点ではコンセプトアートはない</p>
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