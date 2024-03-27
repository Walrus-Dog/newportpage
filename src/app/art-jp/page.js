"use client"
import React from "react";
import { useState } from "react";
import Head from "../../../components/Head/Head"
import LogoArtJp from "../../../components/Nav Sec Jp/Logos/LogoArtJp";
import NavArtJp from "../../../components/Nav Sec Jp/Navs/NavArtJp";
import SocialArtJp from "../../../components/Nav Sec Jp/Socials/SocialArtJp";
import LangArt from "../../../components/Nav Section/Langs/LangArt"
import ColophonArtJp from "../../../components/Nav Sec Jp/Colophons/ColophonArtJp";
import FsLightbox from "fslightbox-react";
import ArtHeaderSmallJp from "../../../components/NavSecSmallJp/HeadersJp/ArtHeaderSmallJp";
import ColophonArtSmallJp from "../../../components/NavSecSmallJp/ColophonSmallJp/ColophonArtSmallJp";

export default function ArtJp() {

        const [toggler1, setToggler1] = useState(false);
        const [toggler2, setToggler2] = useState(false);
        const [toggler3, setToggler3] = useState(false);
        const [toggler4, setToggler4] = useState(false);
        const [toggler5, setToggler5] = useState(false);
        const [toggler6, setToggler6] = useState(false);
        const [toggler7, setToggler7] = useState(false);
        const [toggler8, setToggler8] = useState(false);
        const [toggler9, setToggler9] = useState(false);
        const [toggler10, setToggler10] = useState(false);

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
                            このページでは、私のアートの一部を紹介します。私が概ね満足している作品です。もっとご覧になりたい方は、私の<span className="art-span"><a target="_blank" href="https://twitter.com/WalrusDog">ツイッター</a></span>をチェックしてください！
                            </p>
                        </div>
                        <div class="art-conts-div">
                        <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler1(!toggler1)} id="artImg" className="img-fluid art-img" src="/media/art/thumbnails/drawmoodysmaller.png" alt="moody" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler1}
                                        sources={[
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler2(!toggler2)} id="artImg" className="img-fluid art-img" src="/media/art/thumbnails/drawseconcept2smaller.png" alt="se concept" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler2}
                                        sources={[
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler3(!toggler3)} id="artImg" className="img-fluid art-img" src="/media/art/thumbnails/drawgaragesmaller.png" alt="garage" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler3}
                                        sources={[
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler4(!toggler4)} id="artImg" class="img-fluid art-img" src="/media/art/thumbnails/drawdinnersmaller.png" alt="dinner" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler4}
                                        sources={[
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <div className="art-img-sep">
                                        <img onClick={() => setToggler5(!toggler5)} id="artImg" class="img img-fluid art-img" src="/media/art/thumbnails/drawmiketrainsmaller.png" alt="mike train" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler5}
                                            sources={[
                                                '/media/art/fullsize/drawmiketrain.png',
                                                '/media/art/fullsize/drawbanki.png',
                                                '/media/art/fullsize/drawpole.png',
                                                '/media/art/fullsize/drawbleachers.png',
                                                '/media/art/fullsize/drawsneaky.png',
                                                '/media/art/fullsize/drawstairs.png',
                                                '/media/art/fullsize/drawmoody.png',
                                                '/media/art/fullsize/drawseconcept2withnono.png',
                                                '/media/art/fullsize/drawgarage.png',
                                                '/media/art/fullsize/drawdinner.png',
                                            ]}
                                        />
                                    </div>
                                    <div className="art-img-sep">
                                        <img onClick={() => setToggler6(!toggler6)} id="artImg" class="img img-fluid art-img" src="/media/art/thumbnails/drawbankismaller.png" alt="sekibanki" />
                                        <FsLightbox
                                            exitFullscreenOnClose={true}
                                            toggler={toggler6}
                                            sources={[
                                                '/media/art/fullsize/drawbanki.png',
                                                '/media/art/fullsize/drawpole.png',
                                                '/media/art/fullsize/drawbleachers.png',
                                                '/media/art/fullsize/drawsneaky.png',
                                                '/media/art/fullsize/drawstairs.png',
                                                '/media/art/fullsize/drawmoody.png',
                                                '/media/art/fullsize/drawseconcept2withnono.png',
                                                '/media/art/fullsize/drawgarage.png',
                                                '/media/dart/fullsize/rawdinner.png',
                                                '/media/art/fullsize/drawmiketrain.png',
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler7(!toggler7)} id="artImg" class="img img-fluid art-img" src="/media/art/thumbnails/drawpolesmaller.png" alt="pole" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler7}
                                        sources={[
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler8(!toggler8)} id="artImg" class="img img-fluid art-img" src="/media/art/thumbnails/drawbleacherssmaller.png" alt="bleachers" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler8}
                                        sources={[
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler9(!toggler9)} id="artImg" class="img img-fluid art-img" src="/media/art/thumbnails/drawsneakysmaller.png" alt="sneaky" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler9}
                                        sources={[
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler10(!toggler10)} id="artImg" class="img img-fluid art-img" src="/media/art/thumbnails/drawstairssmaller.png" alt="stairs" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler10}
                                        sources={[
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
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
                <ArtHeaderSmallJp />
                <div className="container">
                    <div className="row">
                        <section className="art-header-sec">
                            <div class="art-header-small">
                                <h1 class="art-header-text-small">
                                    アート
                                </h1>
                            </div>
                            <div className="art-info-small">
                                <p className="art-text-small">
                                このページでは、私のアートの一部を紹介します。私が概ね満足している作品です。もっとご覧になりたい方は、私の<span className="art-span"><a target="_blank" href="https://twitter.com/WalrusDog">ツイッター</a></span>をチェックしてください！
                                </p>
                            </div>
                        </section>
                        <section className="art-conts-sec">
                            <div class="art-conts-div-small justify-contents-center">
                            <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler1(!toggler1)} id="artImg" className="img-fluid art-img" src="/media/art/thumbnails/drawmoodysmaller.png" alt="moody" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler1}
                                        sources={[
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler2(!toggler2)} id="artImg" className="img-fluid art-img" src="/media/art/thumbnails/drawseconcept2smaller.png" alt="se concept" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler2}
                                        sources={[
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler3(!toggler3)} id="artImg" className="img-fluid art-img" src="/media/art/thumbnails/drawgaragesmaller.png" alt="garage" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler3}
                                        sources={[
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler4(!toggler4)} id="artImg" class="img-fluid art-img" src="/media/art/thumbnails/drawdinnersmaller.png" alt="dinner" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler4}
                                        sources={[
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler5(!toggler5)} id="artImg" class="img img-fluid art-img" src="/media/art/thumbnails/drawmiketrainsmaller.png" alt="mike train" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler5}
                                        sources={[
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler6(!toggler6)} id="artImg" class="img img-fluid art-img" src="/media/art/thumbnails/drawbankismaller.png" alt="sekibanki" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler6}
                                        sources={[
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/dart/fullsize/rawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler7(!toggler7)} id="artImg" class="img img-fluid art-img" src="/media/art/thumbnails/drawpolesmaller.png" alt="pole" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler7}
                                        sources={[
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler8(!toggler8)} id="artImg" class="img img-fluid art-img" src="/media/art/thumbnails/drawbleacherssmaller.png" alt="bleachers" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler8}
                                        sources={[
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler9(!toggler9)} id="artImg" class="img img-fluid art-img" src="/media/art/thumbnails/drawsneakysmaller.png" alt="sneaky" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler9}
                                        sources={[
                                            '/media/art/fullsize/drawsneaky.png',
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                        ]}
                                    />
                                </div>
                                <div className="art-img-sep d-flex">
                                    <img onClick={() => setToggler10(!toggler10)} id="artImg" class="img img-fluid art-img" src="/media/art/thumbnails/drawstairssmaller.png" alt="stairs" />
                                    <FsLightbox
                                        exitFullscreenOnClose={true}
                                        toggler={toggler10}
                                        sources={[
                                            '/media/art/fullsize/drawstairs.png',
                                            '/media/art/fullsize/drawmoody.png',
                                            '/media/art/fullsize/drawseconcept2withnono.png',
                                            '/media/art/fullsize/drawgarage.png',
                                            '/media/art/fullsize/drawdinner.png',
                                            '/media/art/fullsize/drawmiketrain.png',
                                            '/media/art/fullsize/drawbanki.png',
                                            '/media/art/fullsize/drawpole.png',
                                            '/media/art/fullsize/drawbleachers.png',
                                            '/media/art/fullsize/drawsneaky.png',
                                        ]}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <ColophonArtSmallJp />
        </section>
        </>
    )
}