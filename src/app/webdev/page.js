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

export default function WebDev() {

    const [toggler1, setToggler1] = useState(false);
    const [toggler2, setToggler2] = useState(false);
    const [toggler3, setToggler3] = useState(false);
    const [toggler4, setToggler4] = useState(false);
    const [toggler5, setToggler5] = useState(false);
    const [toggler6, setToggler6] = useState(false);
    const [toggler7, setToggler7] = useState(false);
    const [toggler8, setToggler8] = useState(false);

    return(
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
                                        <p>Web dev is where one of my passions lies! Though I see myself as better at design than the more technical aspects, I can learn anything I need to make the site as good as it can be. Here on this page will be some of the sites I made before and after MSCA. The differences between them should hopefully serve as a timeline of skill progression. </p>
                                        <p>(Some of the websites featured are not active)</p>
                                        <br />
                                        <br />
                                        {/* ep site */}
                                        <div className="site-div">
                                            <h1 className="site-header">Exit Plan</h1>
                                            <img onClick={()=> setToggler1(!toggler1)} className="img img-fluid dev-img" src="/media/webdevgifs/epsite.gif" />
                                            <FsLightbox 
                                                exitFullscreenOnClose={true}
                                                toggler={toggler1}
                                                sources={[
                                                    '/media/webdevgifs/epsite.gif',
                                                    '/media/webdevgifs/oldportpagesite.gif',
                                                    '/media/webdevgifs/rqsite.gif',
                                                    '/media/webdevgifs/venedorsite.gif',
                                                    '/media/webdevgifs/graphicsite.gif',
                                                    '/media/webdevgifs/aditisite.gif',
                                                    '/media/webdevgifs/bloomsite.gif',
                                                    '/media/webdevgifs/detoixsite.gif',
                                                ]}
                                            />
                                            <p className="site-desc">Mock up site for my game studio</p>
                                            <a target="_blank" href="https://github.com/Walrus-Dog/epwebsite" className="site-link">_GitHub Page</a>
                                        </div>
                                        <br />
                                        <br />
                                        {/* old port site */}
                                        <div className="site-div">
                                            <h1 className="site-header">Old Portfolio</h1>
                                            <img onClick={()=> setToggler2(!toggler2)} className="img img-fluid dev-img" src="/media/webdevgifs/oldportpagesite.gif" />
                                            <FsLightbox 
                                                exitFullscreenOnClose={true}
                                                toggler={toggler2}
                                                sources={[
                                                    '/media/webdevgifs/oldportpagesite.gif',
                                                    '/media/webdevgifs/rqsite.gif',
                                                    '/media/webdevgifs/venedorsite.gif',
                                                    '/media/webdevgifs/graphicsite.gif',
                                                    '/media/webdevgifs/aditisite.gif',
                                                    '/media/webdevgifs/bloomsite.gif',
                                                    '/media/webdevgifs/detoixsite.gif',
                                                    '/media/webdevgifs/epsite.gif',
                                                ]}
                                            />
                                            <p className="site-desc">My old page made at MSCA</p>
                                            <a target="_blank" href="https://walrus-dog.github.io/PortPage/" className="site-link">_GitHub Environment</a>
                                            <br />
                                            <a target="_blank" href="https://github.com/Walrus-Dog/PortPage" className="site-link">_GitHub Page</a>
                                        </div>
                                        <br />
                                        <br />
                                        {/* rq site */}
                                        <div className="site-div">
                                            <h1 className="site-header">Ramen Quest</h1>
                                            <img onClick={()=> setToggler3(!toggler3)} className="img img-fluid dev-img" src="/media/webdevgifs/rqsite.gif" />
                                            <FsLightbox 
                                                exitFullscreenOnClose={true}
                                                toggler={toggler3}
                                                sources={[
                                                    '/media/webdevgifs/rqsite.gif',
                                                    '/media/webdevgifs/venedorsite.gif',
                                                    '/media/webdevgifs/graphicsite.gif',
                                                    '/media/webdevgifs/aditisite.gif',
                                                    '/media/webdevgifs/bloomsite.gif',
                                                    '/media/webdevgifs/detoixsite.gif',
                                                    '/media/webdevgifs/epsite.gif',
                                                    '/media/webdevgifs/oldportpagesite.gif',
                                                ]}
                                            />
                                            <p className="site-desc">First version of Ramen Quest made at MSCA</p>
                                            <a target="_blank" href="https://walrus-dog.github.io/ramenquest/" className="site-link">_GitHub Environment</a>
                                            <br />
                                            <a target="_blank" href="https://github.com/Walrus-Dog/ramenquest" className="site-link">_GitHub Page</a>
                                        </div>
                                        <br />
                                        <br />
                                        {/* venedor site */}
                                        <div className="site-div">
                                            <h1 className="site-header">Venedor</h1>
                                            <img onClick={()=> setToggler4(!toggler4)} className="img img-fluid dev-img" src="/media/webdevgifs/venedorsite.gif" />
                                            <FsLightbox 
                                                exitFullscreenOnClose={true}
                                                toggler={toggler4}
                                                sources={[
                                                    '/media/webdevgifs/venedorsite.gif',
                                                    '/media/webdevgifs/graphicsite.gif',
                                                    '/media/webdevgifs/aditisite.gif',
                                                    '/media/webdevgifs/bloomsite.gif',
                                                    '/media/webdevgifs/detoixsite.gif',
                                                    '/media/webdevgifs/epsite.gif',
                                                    '/media/webdevgifs/oldportpagesite.gif',
                                                    '/media/webdevgifs/rqsite.gif',
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
                                            <img onClick={()=> setToggler5(!toggler5)} className="img img-fluid dev-img" src="/media/webdevgifs/graphicsite.gif" />
                                            <FsLightbox 
                                                exitFullscreenOnClose={true}
                                                toggler={toggler5}
                                                sources={[
                                                    '/media/webdevgifs/graphicsite.gif',
                                                    '/media/webdevgifs/aditisite.gif',
                                                    '/media/webdevgifs/bloomsite.gif',
                                                    '/media/webdevgifs/detoixsite.gif',
                                                    '/media/webdevgifs/epsite.gif',
                                                    '/media/webdevgifs/oldportpagesite.gif',
                                                    '/media/webdevgifs/rqsite.gif',
                                                    '/media/webdevgifs/venedorsite.gif',
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
                                            <img onClick={()=> setToggler6(!toggler6)} className="img img-fluid dev-img" src="/media/webdevgifs/aditisite.gif" />
                                            <FsLightbox 
                                                exitFullscreenOnClose={true}
                                                toggler={toggler6}
                                                sources={[
                                                    '/media/webdevgifs/aditisite.gif',
                                                    '/media/webdevgifs/bloomsite.gif',
                                                    '/media/webdevgifs/detoixsite.gif',
                                                    '/media/webdevgifs/epsite.gif',
                                                    '/media/webdevgifs/oldportpagesite.gif',
                                                    '/media/webdevgifs/rqsite.gif',
                                                    '/media/webdevgifs/venedorsite.gif',
                                                    '/media/webdevgifs/graphicsite.gif',
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
                                            <img onClick={()=> setToggler7(!toggler7)} className="img img-fluid dev-img" src="/media/webdevgifs/bloomsite.gif" />
                                            <FsLightbox 
                                                exitFullscreenOnClose={true}
                                                toggler={toggler7}
                                                sources={[
                                                    '/media/webdevgifs/bloomsite.gif',
                                                    '/media/webdevgifs/detoixsite.gif',
                                                    '/media/webdevgifs/epsite.gif',
                                                    '/media/webdevgifs/oldportpagesite.gif',
                                                    '/media/webdevgifs/rqsite.gif',
                                                    '/media/webdevgifs/venedorsite.gif',
                                                    '/media/webdevgifs/graphicsite.gif',
                                                    '/media/webdevgifs/aditisite.gif',
                                                ]}
                                            />
                                            <p className="site-desc">Site made for MSCA</p>
                                            <a target="_blank" href="https://github.com/Walrus-Dog/Bloom" className="site-link">_GitHub Page</a>
                                        </div>
                                        <br />
                                        <br />
                                        {/* detoix site */}
                                        <div className="site-div">
                                            <h1 className="site-header">Detoix</h1>
                                            <img onClick={()=> setToggler8(!toggler8)} className="img img-fluid dev-img" src="/media/webdevgifs/detoixsite.gif" />
                                            <FsLightbox 
                                                exitFullscreenOnClose={true}
                                                toggler={toggler8}
                                                sources={[
                                                    '/media/webdevgifs/detoixsite.gif',
                                                    '/media/webdevgifs/epsite.gif',
                                                    '/media/webdevgifs/oldportpagesite.gif',
                                                    '/media/webdevgifs/rqsite.gif',
                                                    '/media/webdevgifs/venedorsite.gif',
                                                    '/media/webdevgifs/graphicsite.gif',
                                                    '/media/webdevgifs/aditisite.gif',
                                                    '/media/webdevgifs/bloomsite.gif',
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