import React from "react";
import Link from "next/link";
import styles from 'public/style/style.css';
//import 'public/style/style.css';
import Image from "next/image";
import ImgHeader from "../../public/media/drawlogoloop1.gif"
import Head from "../../components/Head/Head";

export default function Home() {
    return (
        <>
            <Head />
            <metadata />
            <main>
                <section className="landing-vid">
                    <div className="container-fluid">
                        <div className="row">
                            <video className="bg-vid" playsinline autoPlay loop muted poster="/media/drawlogoloop1.gif" src="/media/landingvideo6.mp4"></video>
                            <div class="vid-text">
                                <h1 className="lander-text-header">walrusdog</h1>
                                <p className="lander-text-desc">art | game design | web dev</p>
                                <p className="lander-text-desc">let's get started, yeah?</p>
                                <Link className="enter-text" href="/landing">- enter -</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="landing-vid-small">
                    <div className="container-fluid">
                        <div className="row">
                            <video className="bg-vid-small" playsinline autoPlay loop muted poster="/media/drawlogoloop1.gif" src="/media/landingvideo6.mp4"></video>
                            <div class="vid-text">
                                <h1 className="lander-text-header-small">walrusdog</h1>
                                <p className="lander-text-desc-small">| art |</p>
                                <p className="lander-text-desc-small">| game design |</p>
                                <p className="lander-text-desc-small">| web dev |</p>
                                <p className="lander-text-desc-smalll">let's get started, yeah?</p>
                                <Link className="enter-text-small" href="/landing">- enter -</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
