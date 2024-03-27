"use client"
import React from "react";
import { useState } from "react";
import Head from "../../../components/Head/Head";
import LogoWebdev from "../../../components/Nav Section/Logos/LogoWebdev";
import NavWebdev from "../../../components/Nav Section/Navs/NavWebdev";
import SocialWebdev from "../../../components/Nav Section/Socials/SocialWebdev";
import LangWebdev from "../../../components/Nav Section/Langs/LangWebdev";
import ColophonWebdev from "../../../components/Nav Section/Colophons/ColophonWebdev";
import FsLightbox from "fslightbox-react";
import ColophonWebDevSmall from "../../../components/NavSecSmall/ColophonSmall/ColophonWebDevSmall";
import HeaderWebDevSmall from "../../../components/NavSecSmall/Headers/HeaderWebDevSmall";

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
                                        <p>Web development has been a more recent passion of mine. I attended the Mississippi Coding Academies in 2021, where I received their certificate in Full Stack Development. Since then I have been honing my skills in the web based fields, mastering the tools needed to create the best web experiences I can for the user.</p>
                                        <p>Featured below are some of my past projects, with more to come in the future.</p>
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
                                        <p className="site-desc">Mock up site for a game studio (no longer in use)</p>
                                        <a target="_blank" href="https://github.com/Walrus-Dog/epwebsite" className="site-link">_GitHub Page</a>
                                    </div>
                                    <br />
                                    <br />
                                    {/* old port site */}
                                    <div className="site-div">
                                        <h1 className="site-header">Old Portfolio</h1>
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
                                        <p className="site-desc">My old page made at MSCA</p>
                                        <a target="_blank" href="https://walrus-dog.github.io/PortPage/" className="site-link">_GitHub Environment</a>
                                        <br />
                                        <a target="_blank" href="https://github.com/Walrus-Dog/PortPage" className="site-link">_GitHub Page</a>
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
                                        <p className="site-desc">Fake store page made at MSCA</p>
                                        <a target="_blank" href="https://walrus-dog.github.io/Venedor-Boot/" className="site-link">_GitHub Environment</a>
                                        <br />
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Venedor-Boot" className="site-link">_GitHub Page</a>
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
                                        <p className="site-desc">Fake design site made at MSCA</p>
                                        <a target="_blank" href="https://walrus-dog.github.io/Umbrella-Boot/" className="site-link">_GitHub Environment</a>
                                        <br />
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Umbrella-Boot" className="site-link">_GitHub Page</a>
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
                                        <p className="site-desc">Fake store front made at MSCA</p>
                                        <a target="_blank" href="https://walrus-dog.github.io/Aditti/" className="site-link">_GitHub Environment</a>
                                        <br />
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Aditti" className="site-link">_GitHub Page</a>
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
                                        <p className="site-desc">Site made for MSCA</p>
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Bloom" className="site-link">_GitHub Page</a>
                                    </div>
                                    <br />
                                    <br />
                                    {/* detoix site */}
                                    <div className="site-div">
                                        <h1 className="site-header">Detroix</h1>
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
                                        <p className="site-desc">First big page at MSCA</p>
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Detroix-Bootstrap" className="site-link">_GitHub Page</a>
                                    </div>
                                    <br />
                                    <br />
                                    <h1 className="site-header">This website!</h1>
                                    <p>This site was made by me while learning Next JS!</p>
                                    <p>(Light box used is FsLightbox)</p>
                                    <br />
                                    <p>More coming soon! Will it be one of your projects?</p>
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
                <HeaderWebDevSmall />
                <div className="container">
                    <div className="row">
                        <section class="webdev-info">
                            <div class="webdev-header-small">
                                <h1 class="webdev-header-text">
                                    web dev
                                </h1>
                            </div>
                            <div class="webdev-info-div-small">
                                <p class="webdev-text-small">
                                    <p>Web development has been a more recent passion of mine. I attended the Mississippi Coding Academies in 2021, where I received their certificate in Full Stack Development. Since then I have been honing my skills in the web based fields, mastering the tools needed to create the best web experiences I can for the user.</p>
                                    <p>Featured below are some of my past projects, with more to come in the future.</p>
                                </p>
                            </div>
                            <div className="webdev-sites-small">
                                <div>
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
                                        <p className="site-desc">Mock up site for a game studio (no longer in use)</p>
                                        <a target="_blank" href="https://github.com/Walrus-Dog/epwebsite" className="site-link">_GitHub Page</a>
                                    </div>
                                    <br />
                                    <br />
                                    {/* old port site */}
                                    <div className="site-div">
                                        <h1 className="site-header">Old Portfolio</h1>
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
                                        <p className="site-desc">My old page made at MSCA</p>
                                        <a target="_blank" href="https://walrus-dog.github.io/PortPage/" className="site-link">_GitHub Environment</a>
                                        <br />
                                        <a target="_blank" href="https://github.com/Walrus-Dog/PortPage" className="site-link">_GitHub Page</a>
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
                                        <p className="site-desc">Fake store page made at MSCA</p>
                                        <a target="_blank" href="https://walrus-dog.github.io/Venedor-Boot/" className="site-link">_GitHub Environment</a>
                                        <br />
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Venedor-Boot" className="site-link">_GitHub Page</a>
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
                                        <p className="site-desc">Fake design site made at MSCA</p>
                                        <a target="_blank" href="https://walrus-dog.github.io/Umbrella-Boot/" className="site-link">_GitHub Environment</a>
                                        <br />
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Umbrella-Boot" className="site-link">_GitHub Page</a>
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
                                        <p className="site-desc">Fake store front made at MSCA</p>
                                        <a target="_blank" href="https://walrus-dog.github.io/Aditti/" className="site-link">_GitHub Environment</a>
                                        <br />
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Aditti" className="site-link">_GitHub Page</a>
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
                                        <p className="site-desc">Site made for MSCA</p>
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Bloom" className="site-link">_GitHub Page</a>
                                    </div>
                                    <br />
                                    <br />
                                    {/* detoix site */}
                                    <div className="site-div">
                                        <h1 className="site-header">Detroix</h1>
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
                                        <p className="site-desc">First big page at MSCA</p>
                                        <a target="_blank" href="https://github.com/Walrus-Dog/Detroix-Bootstrap" className="site-link">_GitHub Page</a>
                                    </div>
                                <br />
                                <br />
                                </div>
                                <h1 className="site-header">This website!</h1>
                                <p>This site was made by me while learning Next JS!</p>
                                <p>(Light box used is FsLightbox)</p>
                                <br />
                                <p>More coming soon! Will it be one of your projects?</p>
                            </div>
                        </section>
                    </div>
                </div>
                <ColophonWebDevSmall />
            </section>
        </>
    )
}