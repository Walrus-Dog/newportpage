"use client"
import React from "react";
import { useState } from "react";
import Head from "../../../components/Head/Head";
import LogoWebdevJp from "../../../components/Nav Sec Jp/Logos/LogoWebdevJp";
import NavWebdevJp from "../../../components/Nav Sec Jp/Navs/NavWebdevJp";
import SocialWebdevJp from "../../../components/Nav Sec Jp/Socials/SocailWebdevJp";
import LangWebdev from "../../../components/Nav Section/Langs/LangWebdev";
import ColophonWebdevJp from "../../../components/Nav Sec Jp/Colophons/ColophonWebdevJp";
import FsLightbox from "fslightbox-react";
import ColophonWebDevSmallJp from "../../../components/NavSecSmallJp/ColophonSmallJp/ColophonWebDevSmall";
import HeaderWebDevSmallJp from "../../../components/NavSecSmallJp/HeadersJp/HeaderWebDevSmallJp";

export default function WebDev() {

    const [toggler1, setToggler1] = useState(false);
    const [toggler2, setToggler2] = useState(false);
    const [toggler3, setToggler3] = useState(false);
    const [toggler4, setToggler4] = useState(false);
    const [toggler5, setToggler5] = useState(false);
    const [toggler6, setToggler6] = useState(false);
    const [toggler7, setToggler7] = useState(false);

    return (
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
                                        <p>ウェブ開発は私の最近の情熱だ。2021年にミシシッピ・コーディング・アカデミーに参加し、そこでフルスタック開発の修了証を取得しました。それ以来、ウェブベースの分野でスキルを磨き、ユーザーにとって最高のウェブ体験を創造するために必要なツールをマスターしてきました。</p>
                                        <br/>
                                        <br/>
                                        <p>以下に私の過去のプロジェクトをいくつか紹介する。</p>
                                    </p>
                                </div>
                                <div className="webdev-sites">
                                    {/* ep site */}
                                    <div className="site-div">
                                        <h1 className="site-header">Exit Plan</h1>
                                        <img onClick={() => setToggler1(!toggler1)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/epsitesmaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler1}
                                            sources={[
                                                '/media/webdev/fullsize/epsite.png',
                                                '/media/webdev/fullsize/oldport.png',
                                                '/media/webdev/fullsize/venedor.png',
                                                '/media/webdev/fullsize/umbrella.png',
                                                '/media/webdev/fullsize/aditti.png',
                                                '/media/webdev/fullsize/bloom.png',
                                                '/media/webdev/fullsize/detroix.png',
                                            ]}
                                        />
                                        <p className="site-desc">ゲームスタジオのモックアップサイト</p>
                                        <a target="_blank" href="https://github.com/Walrus-Dog/epwebsite" className="site-link">_GitHub頁</a>
                                    </div>
                                    <br />
                                    <br />
                                    {/* old port site */}
                                    <div className="site-div">
                                        <h1 className="site-header">旧ポートフォリオ</h1>
                                        <img onClick={() => setToggler2(!toggler2)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/oldportsmaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler2}
                                            sources={[
                                                '/media/webdev/fullsize/oldport.png',
                                                '/media/webdev/fullsize/venedor.png',
                                                '/media/webdev/fullsize/umbrella.png',
                                                '/media/webdev/fullsize/aditti.png',
                                                '/media/webdev/fullsize/bloom.png',
                                                '/media/webdev/fullsize/detroix.png',
                                                '/media/webdev/fullsize/epsite.png',
                                            ]}
                                        />
                                        <p className="site-desc">MSCAで作った私の古いページ</p>
                                        <a target="_blank" href="https://walrus-dog.github.io/PortPage/" className="site-link">_GitHub環境</a>
                                        <br />
                                        <a target="_blank" href="https://github.com/Walrus-Dog/PortPage" className="site-link">_GitHub頁</a>
                                    </div>
                                    <br />
                                    <br />
                                    {/* venedor site */}
                                    <div className="site-div">
                                        <h1 className="site-header">Venedor</h1>
                                        <img onClick={() => setToggler3(!toggler3)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/venedorsmaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler3}
                                            sources={[
                                                '/media/webdev/fullsize/venedor.png',
                                                '/media/webdev/fullsize/umbrella.png',
                                                '/media/webdev/fullsize/aditti.png',
                                                '/media/webdev/fullsize/bloom.png',
                                                '/media/webdev/fullsize/detroix.png',
                                                '/media/webdev/fullsize/epsite.png',
                                                '/media/webdev/fullsize/oldport.png',
                                            ]}
                                        />
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
                                        <img onClick={() => setToggler4(!toggler4)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/umbrellasmaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler4}
                                            sources={[
                                                '/media/webdev/fullsize/umbrella.png',
                                                '/media/webdev/fullsize/aditti.png',
                                                '/media/webdev/fullsize/bloom.png',
                                                '/media/webdev/fullsize/detroix.png',
                                                '/media/webdev/fullsize/epsite.png',
                                                '/media/webdev/fullsize/oldport.png',
                                                '/media/webdev/fullsize/venedor.png',
                                            ]}
                                        />
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
                                        <img onClick={() => setToggler5(!toggler5)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/adittismaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler5}
                                            sources={[
                                                '/media/webdev/fullsize/aditti.png',
                                                '/media/webdev/fullsize/bloom.png',
                                                '/media/webdev/fullsize/detroix.png',
                                                '/media/webdev/fullsize/epsite.png',
                                                '/media/webdev/fullsize/oldport.png',
                                                '/media/webdev/fullsize/venedor.png',
                                                '/media/webdev/fullsize/umbrella.png',
                                            ]}
                                        />
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
                                        <img onClick={() => setToggler6(!toggler6)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/bloomsmaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler6}
                                            sources={[
                                                '/media/webdev/fullsize/bloom.png',
                                                '/media/webdev/fullsize/detroixsite.png',
                                                '/media/webdev/fullsize/epsite.png',
                                                '/media/webdev/fullsize/oldport.png',
                                                '/media/webdev/fullsize/venedor.png',
                                                '/media/webdev/fullsize/umbrella.png',
                                                '/media/webdev/fullsize/aditti.png',
                                            ]}
                                        />
                                        <p className="site-desc">MSCAのために作られたサイト</p>
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Bloom" className="site-link">_GitHub頁</a>
                                    </div>
                                    <br />
                                    <br />
                                    {/* detoix site */}
                                    <div className="site-div">
                                        <h1 className="site-header">Detoix</h1>
                                        <img onClick={() => setToggler7(!toggler7)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/detroixsmaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler7}
                                            sources={[
                                                '/media/webdev/fullsize/detroix.png',
                                                '/media/webdev/fullsize/epsite.png',
                                                '/media/webdev/fullsize/oldport.png',
                                                '/media/webdev/fullsize/venedor.png',
                                                '/media/webdev/fullsize/umbrella.png',
                                                '/media/webdev/fullsize/aditti.png',
                                                '/media/webdev/fullsize/bloom.png',
                                            ]}
                                        />
                                        <p className="site-desc">MSCAで初の大きなページ</p>
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Detroix-Bootstrap" className="site-link">_GitHub頁</a>
                                    </div>
                                    <br />
                                    <br />
                                    <p>もっと近々！それはあなたのプロジェクトですか？</p>
                                </div>
                                <div id="nonoDoodleDiv" className="nono-doodle-div">
                                    <img id="nonoDoodle" className="d-sm-none d-md-block nono-doodle1 nono-doodle" src="/media/nonodoodles/drawnonodoodlesite5.png" />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <section className="webdev-small">
                <HeaderWebDevSmallJp />
                <div className="container">
                    <div className="row">
                        <section class="webdev-info">
                            <div class="webdev-header-small">
                                <h1 class="webdev-header-text">
                                    ウェブ開発
                                </h1>
                            </div>
                            <div class="webdev-info-div-small">
                                <p class="webdev-text-small">
                                    <p>ウェブ開発は私の最近の情熱だ。2021年にミシシッピ・コーディング・アカデミーに参加し、そこでフルスタック開発の修了証を取得しました。それ以来、ウェブベースの分野でスキルを磨き、ユーザーにとって最高のウェブ体験を創造するために必要なツールをマスターしてきました。</p>
                                    <p>以下に私の過去のプロジェクトをいくつか紹介する。</p>
                                </p>
                            </div>
                            <div className="webdev-sites-small">
                                {/* ep site */}
                                <div className="site-div">
                                        <h1 className="site-header">Exit Plan</h1>
                                        <img onClick={() => setToggler1(!toggler1)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/epsitesmaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler1}
                                            sources={[
                                                '/media/webdev/fullsize/epsite.png',
                                                '/media/webdev/fullsize/oldport.png',
                                                '/media/webdev/fullsize/venedor.png',
                                                '/media/webdev/fullsize/umbrella.png',
                                                '/media/webdev/fullsize/aditti.png',
                                                '/media/webdev/fullsize/bloom.png',
                                                '/media/webdev/fullsize/detroix.png',
                                            ]}
                                        />
                                        <p className="site-desc">ゲームスタジオのモックアップサイト</p>
                                        <a target="_blank" href="https://github.com/Walrus-Dog/epwebsite" className="site-link">_GitHub頁</a>
                                    </div>
                                    <br />
                                    <br />
                                    {/* old port site */}
                                    <div className="site-div">
                                        <h1 className="site-header">旧ポートフォリオ</h1>
                                        <img onClick={() => setToggler2(!toggler2)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/oldportsmaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler2}
                                            sources={[
                                                '/media/webdev/fullsize/oldport.png',
                                                '/media/webdev/fullsize/venedor.png',
                                                '/media/webdev/fullsize/umbrella.png',
                                                '/media/webdev/fullsize/aditti.png',
                                                '/media/webdev/fullsize/bloom.png',
                                                '/media/webdev/fullsize/detroix.png',
                                                '/media/webdev/fullsize/epsite.png',
                                            ]}
                                        />
                                        <p className="site-desc">MSCAで作った私の古いページ</p>
                                        <a target="_blank" href="https://walrus-dog.github.io/PortPage/" className="site-link">_GitHub環境</a>
                                        <br />
                                        <a target="_blank" href="https://github.com/Walrus-Dog/PortPage" className="site-link">_GitHub頁</a>
                                    </div>
                                    <br />
                                    <br />
                                    {/* venedor site */}
                                    <div className="site-div">
                                        <h1 className="site-header">Venedor</h1>
                                        <img onClick={() => setToggler3(!toggler3)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/venedorsmaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler3}
                                            sources={[
                                                '/media/webdev/fullsize/venedor.png',
                                                '/media/webdev/fullsize/umbrella.png',
                                                '/media/webdev/fullsize/aditti.png',
                                                '/media/webdev/fullsize/bloom.png',
                                                '/media/webdev/fullsize/detroix.png',
                                                '/media/webdev/fullsize/epsite.png',
                                                '/media/webdev/fullsize/oldport.png',
                                            ]}
                                        />
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
                                        <img onClick={() => setToggler4(!toggler4)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/umbrellasmaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler4}
                                            sources={[
                                                '/media/webdev/fullsize/umbrella.png',
                                                '/media/webdev/fullsize/aditti.png',
                                                '/media/webdev/fullsize/bloom.png',
                                                '/media/webdev/fullsize/detroix.png',
                                                '/media/webdev/fullsize/epsite.png',
                                                '/media/webdev/fullsize/oldport.png',
                                                '/media/webdev/fullsize/venedor.png',
                                            ]}
                                        />
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
                                        <img onClick={() => setToggler5(!toggler5)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/adittismaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler5}
                                            sources={[
                                                '/media/webdev/fullsize/aditti.png',
                                                '/media/webdev/fullsize/bloom.png',
                                                '/media/webdev/fullsize/detroix.png',
                                                '/media/webdev/fullsize/epsite.png',
                                                '/media/webdev/fullsize/oldport.png',
                                                '/media/webdev/fullsize/venedor.png',
                                                '/media/webdev/fullsize/umbrella.png',
                                            ]}
                                        />
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
                                        <img onClick={() => setToggler6(!toggler6)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/bloomsmaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler6}
                                            sources={[
                                                '/media/webdev/fullsize/bloom.png',
                                                '/media/webdev/fullsize/detroixsite.png',
                                                '/media/webdev/fullsize/epsite.png',
                                                '/media/webdev/fullsize/oldport.png',
                                                '/media/webdev/fullsize/venedor.png',
                                                '/media/webdev/fullsize/umbrella.png',
                                                '/media/webdev/fullsize/aditti.png',
                                            ]}
                                        />
                                        <p className="site-desc">MSCAのために作られたサイト</p>
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Bloom" className="site-link">_GitHub頁</a>
                                    </div>
                                    <br />
                                    <br />
                                    {/* detoix site */}
                                    <div className="site-div">
                                        <h1 className="site-header">Detoix</h1>
                                        <img onClick={() => setToggler7(!toggler7)} className="img img-fluid dev-img" src="/media/webdev/thumbnails/detroixsmaller.png" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler7}
                                            sources={[
                                                '/media/webdev/fullsize/detroix.png',
                                                '/media/webdev/fullsize/epsite.png',
                                                '/media/webdev/fullsize/oldport.png',
                                                '/media/webdev/fullsize/venedor.png',
                                                '/media/webdev/fullsize/umbrella.png',
                                                '/media/webdev/fullsize/aditti.png',
                                                '/media/webdev/fullsize/bloom.png',
                                            ]}
                                        />
                                        <p className="site-desc">MSCAで初の大きなページ</p>
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Detroix-Bootstrap" className="site-link">_GitHub頁</a>
                                    </div>
                                <br />
                                <br />
                                <p>もっと近々！それはあなたのプロジェクトですか？</p>
                            </div>
                        </section>
                    </div>
                </div>
                <ColophonWebDevSmallJp />
            </section>
        </>
    )
}