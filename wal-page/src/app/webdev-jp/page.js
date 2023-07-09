import React from "react";
import Head from "../../../components/Head/Head";
import LogoWebdevJp from "../../../components/Nav Sec Jp/Logos/LogoWebdevJp";
import NavWebdevJp from "../../../components/Nav Sec Jp/Navs/NavWebdevJp";
import SocialWebdevJp from "../../../components/Nav Sec Jp/Socials/SocailWebdevJp";
import LangWebdev from "../../../components/Nav Section/Langs/LangWebdev";
import ColophonWebdevJp from "../../../components/Nav Sec Jp/Colophons/ColophonWebdevJp";

export default function WebDev() {
    return(
        <>
        <Head />
        <section class="webdev">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <LogoWebdevJp />
                        <NavWebdevJp />
                        <SocialWebdevJp />
                        <LangWebdev />
                        <ColophonWebdevJp />
                    </div>
                    <div class="col-md-8">
                        <section class="webdev-info">
                            <div class="webdev-header">
                                <h1 class="webdev-header-text">
                                    ウェブ開発
                                </h1>
                            </div>
                            <div class="webdev-info-div">
                                <p class="webdev-text">
                                        <p>ウェブ制作は私の情熱のひとつです！技術的な面よりもデザインの方が得意だと自分では思っていますが、サイトをできるだけ良いものにするために必要なことは何でも学べます。このページでは、MSCAの前と後で私が作ったサイトのいくつかを紹介します。その違いは、スキルの上達を示す年表のような役割を果たすことを願っています。</p>
                                        <p>(一部のウェブサイトは休止中)</p>
                                        <br />
                                        <br />
                                        {/* ep site */}
                                        <div className="site-div">
                                            <h1 className="site-header">Exit Plan</h1>
                                            <a href="">
                                                <img className="img img-fluid dev-img" src="/media/webdevgifs/epsite.gif" />
                                            </a>
                                            <p className="site-desc">ゲームスタジオのモックアップサイト</p>
                                            <a target="_blank" href="https://github.com/Walrus-Dog/epwebsite" className="site-link">_GitHub頁</a>
                                        </div>
                                        <br />
                                        <br />
                                        {/* old port site */}
                                        <div className="site-div">
                                            <h1 className="site-header">旧ポートフォリオ</h1>
                                            <a href="">
                                                <img className="img img-fluid dev-img" src="/media/webdevgifs/oldportpagesite.gif" />
                                            </a>
                                            <p className="site-desc">MSCAで作った私の古いページ</p>
                                            <a target="_blank" href="https://walrus-dog.github.io/PortPage/" className="site-link">_GitHub環境</a>
                                            <br />
                                            <a target="_blank" href="https://github.com/Walrus-Dog/PortPage" className="site-link">_GitHub頁</a>
                                        </div>
                                        <br />
                                        <br />
                                        {/* rq site */}
                                        <div className="site-div">
                                            <h1 className="site-header">ラメン大冒険</h1>
                                            <a href="">
                                                <img className="img img-fluid dev-img" src="/media/webdevgifs/rqsite.gif" />
                                            </a>
                                            <p className="site-desc">MSCAでラメン大冒険バージョンを初製作</p>
                                            <a target="_blank" href="https://walrus-dog.github.io/ramenquest/" className="site-link">_GitHub環境</a>
                                            <br />
                                            <a target="_blank" href="https://github.com/Walrus-Dog/ramenquest" className="site-link">_GitHub頁</a>
                                        </div>
                                        <br />
                                        <br />
                                        {/* venedor site */}
                                        <div className="site-div">
                                            <h1 className="site-header">Venedor</h1>
                                            <a href="">
                                                <img className="img img-fluid dev-img" src="/media/webdevgifs/venedorsite.gif" />
                                            </a>
                                            <p className="site-desc">MSCAで作られた偽の店舗ページ</p>
                                            <a target="_blank" href="https://walrus-dog.github.io/Venedor-Boot/" className="site-link">_GitHub環境</a>
                                            <br />
                                            <a target="_blank" href="https://github.com/Walrus-Dog/Venedor-Boot" className="site-link">_GitHub頁</a>
                                        </div>
                                        <br />
                                        <br />
                                        {/* graphicsumbrella site */}
                                        <div className="site-div">
                                            <h1 className="site-header">Graphics Umbrella</h1>
                                            <a href="">
                                            <img className="img img-fluid dev-img" src="/media/webdevgifs/graphicsite.gif" />
                                            </a>
                                            <p className="site-desc">MSCAで作られた偽デザインサイト</p>
                                            <a target="_blank" href="https://walrus-dog.github.io/Umbrella-Boot/" className="site-link">_GitHub環境</a>
                                            <br />
                                            <a target="_blank" href="https://github.com/Walrus-Dog/Umbrella-Boot" className="site-link">_GitHub頁</a>
                                        </div>
                                        <br />
                                        <br />
                                        {/* aditti site */}
                                        <div className="site-div">
                                            <h1 className="site-header">Aditti</h1>
                                            <a href="">
                                            <img className="img img-fluid dev-img" src="/media/webdevgifs/aditisite.gif" />
                                            </a>
                                            <p className="site-desc">MSCAで作られた偽の店舗前面</p>
                                            <a target="_blank" href="https://walrus-dog.github.io/Aditti/" className="site-link">_GitHub環境</a>
                                            <br />
                                            <a target="_blank" href="https://github.com/Walrus-Dog/Aditti" className="site-link">_GitHub頁</a>
                                        </div>
                                        <br />
                                        <br />
                                        {/* bloom site */}
                                        <div className="site-div">
                                            <h1 className="site-header">Bloom</h1>
                                            <a href="">
                                                <img className="img img-fluid dev-img" src="/media/webdevgifs/bloomsite.gif" />
                                            </a>
                                            <p className="site-desc">MSCAのために作られたサイト</p>
                                            <a target="_blank" href="https://github.com/Walrus-Dog/Bloom" className="site-link">_GitHub頁</a>
                                        </div>
                                        <br />
                                        <br />
                                        {/* detoix site */}
                                        <div className="site-div">
                                            <h1 className="site-header">Detoix</h1>
                                            <a href="">
                                                <img className="img img-fluid dev-img" src="/media/webdevgifs/detoixsite.gif" />
                                            </a>
                                            <p className="site-desc">MSCAで初の大きなページ</p>
                                            <a target="_blank" href="https://github.com/Walrus-Dog/Detroix-Bootstrap" className="site-link">_GitHub頁</a>
                                        </div>
                                        <br />
                                        <br />
                                        <p>もっと近々！それはあなたのプロジェクトですか？</p>
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