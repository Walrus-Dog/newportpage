import React from "react";
import { useState } from "react";
import Head from "../../../components/Head/Head"
import LogoArt from "../../../components/Nav Section/Logos/LogoArt";
import NavArt from "../../../components/Nav Section/Navs/NavArt";
import SocialArt from "../../../components/Nav Section/Socials/SocialArt";
import LangArt from "../../../components/Nav Section/Langs/LangArt"
import ColophonArt from "../../../components/Nav Section/Colophons/ColophonArt";
import FsLightbox from "fslightbox-react";

export default function Art() {

    // i know it's jank but it works okay :(
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
                                <img onClick={()=> setToggler1(!toggler1)} id="artImg" class="img img-fluid art-img" src="/media/drawdinner.png" alt="" />
                                <FsLightbox 
                                    exitFullscreenOnClose={true}
                                    toggler={toggler1}
                                    sources={[
                                        '/media/drawdinner.png',
                                        '/media/drawmiketrain.png',
                                        '/media/drawbanki.png',
                                        '/media/drawpole.png',
                                        '/media/drawbleachers.png',
                                        '/media/drawsneaky.png',
                                        '/media/drawstairs.png',
                                    ]}
                                />
                            </div>
                            <div class="art-img-row d-flex">
                                <div class="art-img-sep">
                                    <img onClick={()=> setToggler2(!toggler2)} id="artImg" class="img img-fluid art-img mike-drawing" src="/media/drawmiketrain.png" alt="" />
                                    <FsLightbox 
                                        exitFullscreenOnClose={true}
                                        toggler={toggler2}
                                        sources={[
                                            '/media/drawmiketrain.png',
                                            '/media/drawbanki.png',
                                            '/media/drawpole.png',
                                            '/media/drawbleachers.png',
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/drawdinner.png',
                                        ]}
                                    />
                                </div>
                                <div class="art-img-sep">
                                    <img onClick={()=> setToggler3(!toggler3)} id="artImg" class="img img-fluid art-img" src="/media/drawbanki.png" alt="" />
                                    <FsLightbox 
                                        exitFullscreenOnClose={true}
                                        toggler={toggler3}
                                        sources={[
                                            '/media/drawbanki.png',
                                            '/media/drawpole.png',
                                            '/media/drawbleachers.png',
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/drawdinner.png',
                                            '/media/drawmiketrain.png',
                                        ]}
                                    />
                                </div>
                            </div>
                            <div class="art-img-sep d-flex">
                                <img onClick={()=> setToggler4(!toggler4)} id="artImg" class="img img-fluid art-img" src="/media/drawpole.png" alt="" />
                                <FsLightbox 
                                    exitFullscreenOnClose={true}
                                    toggler={toggler4}
                                    sources={[
                                        '/media/drawpole.png',
                                        '/media/drawbleachers.png',
                                        '/media/drawsneaky.png',
                                        '/media/drawstairs.png',
                                        '/media/drawdinner.png',
                                        '/media/drawmiketrain.png',
                                        '/media/drawbanki.png',
                                    ]}
                                />
                            </div>
                            <div class="art-img-row d-flex">
                                <div class="art-img-sep">
                                    <img onClick={()=> setToggler5(!toggler5)} id="artImg" class="img img-fluid art-img" src="/media/drawbleachers.png" alt="" />
                                    <FsLightbox 
                                        exitFullscreenOnClose={true}
                                        toggler={toggler5}
                                        sources={[
                                            '/media/drawbleachers.png',
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/drawdinner.png',
                                            '/media/drawmiketrain.png',
                                            '/media/drawbanki.png',
                                            '/media/drawpole.png',
                                    ]}
                                />
                                </div>
                                <div class="art-img-sep d-flex">
                                    <img onClick={()=> setToggler6(!toggler6)} id="artImg" class="img img-fluid art-img" src="/media/drawsneaky.png" alt="" />
                                    <FsLightbox 
                                        exitFullscreenOnClose={true}
                                        toggler={toggler6}
                                        sources={[
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/drawdinner.png',
                                            '/media/drawmiketrain.png',
                                            '/media/drawbanki.png',
                                            '/media/drawpole.png',
                                            '/media/drawbleachers.png',
                                    ]}
                                />
                                </div>
                            </div>
                            <div class="art-img-sep d-flex">
                                <img onClick={()=> setToggler7(!toggler7)} id="artImg" class="img img-fluid art-img" src="/media/drawstairs.png" alt="" />
                                <FsLightbox 
                                    exitFullscreenOnClose={true}
                                    toggler={toggler7}
                                    sources={[
                                        '/media/drawstairs.png',
                                        '/media/drawdinner.png',
                                        '/media/drawmiketrain.png',
                                        '/media/drawbanki.png',
                                        '/media/drawpole.png',
                                        '/media/drawbleachers.png',
                                        '/media/drawsneaky.png',
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}