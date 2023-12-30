"use client"
import React from "react";
import { useState } from "react";
import Head from "../../../components/Head/Head"
import LogoArt from "../../../components/Nav Section/Logos/LogoArt";
import NavArt from "../../../components/Nav Section/Navs/NavArt";
import SocialArt from "../../../components/Nav Section/Socials/SocialArt";
import LangArt from "../../../components/Nav Section/Langs/LangArt"
import ColophonArt from "../../../components/Nav Section/Colophons/ColophonArt";
import FsLightbox from "fslightbox-react";
import ArtHeaderSmall from "../../../components/NavSecSmall/Headers/ArtHeaderSmall";
import ColophonArtSmall from "../../../components/NavSecSmall/ColophonSmall/ColophonArtSmalll";

export default function Art() {

    const [toggler1, setToggler1] = useState(false);
    const [toggler2, setToggler2] = useState(false);
    const [toggler3, setToggler3] = useState(false);
    const [toggler4, setToggler4] = useState(false);
    const [toggler5, setToggler5] = useState(false);
    const [toggler6, setToggler6] = useState(false);
    const [toggler7, setToggler7] = useState(false);
    const [toggler8, setToggler8] = useState(false);
    const [toggler9, setToggler9] = useState(false);

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
                                    This page features a selection of my art. If you would like to see more, check out my <span className="art-span"><a target="_blank" href="https://twitter.com/WalrusDog">Twitter</a></span> for updates on my art!
                                </p>
                            </div>
                            <div class="art-conts-div">
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler1(!toggler1)} id="artImg" className="img img-fluid art-img" src="/media/games-art/drawseconcept2withnono.png" alt="Garage" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler1}
                                        sources={[
                                            '/media/games-art/drawseconcept2withnono.png',
                                            '/media/drawgarage.png',
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
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler2(!toggler2)} id="artImg" className="img img-fluid art-img" src="/media/drawgarage.png" alt="Garage" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler2}
                                        sources={[
                                            '/media/drawgarage.png',
                                            '/media/drawdinner.png',
                                            '/media/drawmiketrain.png',
                                            '/media/drawbanki.png',
                                            '/media/drawpole.png',
                                            '/media/drawbleachers.png',
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/games-art/drawseconcept2withnono.png',
                                        ]}
                                    />
                                </div>
                                <div class="art-img-sep d-flex">
                                    <img onClick={() => setToggler3(!toggler3)} id="artImg" class="img img-fluid art-img" src="/media/drawdinner.png" alt="" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler3}
                                        sources={[
                                            '/media/drawdinner.png',
                                            '/media/drawmiketrain.png',
                                            '/media/drawbanki.png',
                                            '/media/drawpole.png',
                                            '/media/drawbleachers.png',
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/games-art/drawseconcept2withnono.png',
                                            '/media/drawgarage.png',
                                        ]}
                                    />
                                </div>
                                <div class="art-img-row d-flex">
                                    <div class="art-img-sep">
                                        <img onClick={() => setToggler4(!toggler4)} id="artImg" class="img img-fluid art-img mike-drawing" src="/media/drawmiketrain.png" alt="" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler4}
                                            sources={[
                                                '/media/drawmiketrain.png',
                                                '/media/drawbanki.png',
                                                '/media/drawpole.png',
                                                '/media/drawbleachers.png',
                                                '/media/drawsneaky.png',
                                                '/media/drawstairs.png',
                                                '/media/games-art/drawseconcept2withnono.png',
                                                '/media/drawgarage.png',
                                                '/media/drawdinner.png',
                                            ]}
                                        />
                                    </div>
                                    <div class="art-img-sep">
                                        <img onClick={() => setToggler5(!toggler5)} id="artImg" class="img img-fluid art-img" src="/media/drawbanki.png" alt="" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler5}
                                            sources={[
                                                '/media/drawbanki.png',
                                                '/media/drawpole.png',
                                                '/media/drawbleachers.png',
                                                '/media/drawsneaky.png',
                                                '/media/drawstairs.png',
                                                '/media/games-art/drawseconcept2withnono.png',
                                                '/media/drawgarage.png',
                                                '/media/drawdinner.png',
                                                '/media/drawmiketrain.png',
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div class="art-img-sep d-flex">
                                    <img onClick={() => setToggler6(!toggler6)} id="artImg" class="img img-fluid art-img" src="/media/drawpole.png" alt="" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler6}
                                        sources={[
                                            '/media/drawpole.png',
                                            '/media/drawbleachers.png',
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/games-art/drawseconcept2withnono.png',
                                            '/media/drawgarage.png',
                                            '/media/drawdinner.png',
                                            '/media/drawmiketrain.png',
                                            '/media/drawbanki.png',
                                        ]}
                                    />
                                </div>
                                <div class="art-img-row d-flex">
                                    <div class="art-img-sep">
                                        <img onClick={() => setToggler7(!toggler7)} id="artImg" class="img img-fluid art-img" src="/media/drawbleachers.png" alt="" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler7}
                                            sources={[
                                                '/media/drawbleachers.png',
                                                '/media/drawsneaky.png',
                                                '/media/drawstairs.png',
                                                '/media/games-art/drawseconcept2withnono.png',
                                                '/media/drawgarage.png',
                                                '/media/drawdinner.png',
                                                '/media/drawmiketrain.png',
                                                '/media/drawbanki.png',
                                                '/media/drawpole.png',
                                            ]}
                                        />
                                    </div>
                                    <div class="art-img-sep d-flex">
                                        <img onClick={() => setToggler8(!toggler8)} id="artImg" class="img img-fluid art-img" src="/media/drawsneaky.png" alt="" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler8}
                                            sources={[
                                                '/media/drawsneaky.png',
                                                '/media/drawstairs.png',
                                                '/media/games-art/drawseconcept2withnono.png',
                                                '/media/drawgarage.png',
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
                                    <img onClick={() => setToggler9(!toggler9)} id="artImg" class="img img-fluid art-img" src="/media/drawstairs.png" alt="" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler9}
                                        sources={[
                                            '/media/drawstairs.png',
                                            '/media/games-art/drawseconcept2withnono.png',
                                            '/media/drawgarage.png',
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
                            <div id="nonoDoodleDiv" className="nono-doodle-div">
                                <img id="nonoDoodle" className="d-sm-none d-md-block nono-doodle1 nono-doodle nono-doodle2" src="/media/nonodoodles/drawnonodoodlesite2.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="art-small">
                <ArtHeaderSmall />
                <div className="container">
                    <div className="row">
                        <section className="art-header-sec">
                            <div class="art-header-small">
                                <h1 class="art-header-text-small">
                                    art
                                </h1>
                            </div>
                            <div className="art-info-small">
                                <p className="art-text-small">
                                    This page features a selection of my art. If you would like to see more, check out my <span className="art-span"><a target="_blank" href="https://twitter.com/WalrusDog">Twitter</a></span> for updates on my art!
                                </p>
                            </div>
                        </section>
                        <section className="art-conts-sec">
                            <div class="art-conts-div-small justify-contents-center">
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler1(!toggler1)} id="artImg" className="img-fluid art-img-small" src="/media/games-art/drawseconcept2withnono.png" alt="Garage" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler1}
                                        sources={[
                                            '/media/games-art/drawseconcept2withnono.png',
                                            '/media/drawgarage.png',
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
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler2(!toggler2)} id="artImg" className="img-fluid art-img-small" src="/media/drawgarage.png" alt="Garage" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler2}
                                        sources={[
                                            '/media/drawgarage.png',
                                            '/media/drawdinner.png',
                                            '/media/drawmiketrain.png',
                                            '/media/drawbanki.png',
                                            '/media/drawpole.png',
                                            '/media/drawbleachers.png',
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/games-art/drawseconcept2withnono.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler3(!toggler3)} id="artImg" class="img-fluid art-img-small" src="/media/drawdinner.png" alt="" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler3}
                                        sources={[
                                            '/media/drawdinner.png',
                                            '/media/drawmiketrain.png',
                                            '/media/drawbanki.png',
                                            '/media/drawpole.png',
                                            '/media/drawbleachers.png',
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/games-art/drawseconcept2withnono.png',
                                            '/media/drawgarage.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler4(!toggler4)} id="artImg" class="img img-fluid art-img" src="/media/drawmiketrain.png" alt="" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler4}
                                        sources={[
                                            '/media/drawmiketrain.png',
                                            '/media/drawbanki.png',
                                            '/media/drawpole.png',
                                            '/media/drawbleachers.png',
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/games-art/drawseconcept2withnono.png',
                                            '/media/drawgarage.png',
                                            '/media/drawdinner.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler5(!toggler5)} id="artImg" class="img img-fluid art-img" src="/media/drawbanki.png" alt="" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler5}
                                        sources={[
                                            '/media/drawbanki.png',
                                            '/media/drawpole.png',
                                            '/media/drawbleachers.png',
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/games-art/drawseconcept2withnono.png',
                                            '/media/drawgarage.png',
                                            '/media/drawdinner.png',
                                            '/media/drawmiketrain.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler6(!toggler6)} id="artImg" class="img img-fluid art-img" src="/media/drawpole.png" alt="" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler6}
                                        sources={[
                                            '/media/drawpole.png',
                                            '/media/drawbleachers.png',
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/games-art/drawseconcept2withnono.png',
                                            '/media/drawgarage.png',
                                            '/media/drawdinner.png',
                                            '/media/drawmiketrain.png',
                                            '/media/drawbanki.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler7(!toggler7)} id="artImg" class="img img-fluid art-img" src="/media/drawbleachers.png" alt="" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler7}
                                        sources={[
                                            '/media/drawbleachers.png',
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/games-art/drawseconcept2withnono.png',
                                            '/media/drawgarage.png',
                                            '/media/drawdinner.png',
                                            '/media/drawmiketrain.png',
                                            '/media/drawbanki.png',
                                            '/media/drawpole.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler8(!toggler8)} id="artImg" class="img img-fluid art-img" src="/media/drawsneaky.png" alt="" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler8}
                                        sources={[
                                            '/media/drawsneaky.png',
                                            '/media/drawstairs.png',
                                            '/media/games-art/drawseconcept2withnono.png',
                                            '/media/drawgarage.png',
                                            '/media/drawdinner.png',
                                            '/media/drawmiketrain.png',
                                            '/media/drawbanki.png',
                                            '/media/drawpole.png',
                                            '/media/drawbleachers.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler9(!toggler9)} id="artImg" class="img img-fluid art-img" src="/media/drawstairs.png" alt="" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler9}
                                        sources={[
                                            '/media/drawstairs.png',
                                            '/media/games-art/drawseconcept2withnono.png',
                                            '/media/drawgarage.png',
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
                        </section>
                    </div>
                </div>
                <ColophonArtSmall />
            </section>
        </>
    )
}