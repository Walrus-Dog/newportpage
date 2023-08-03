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
                    <a href="landing.html">
                        <img className="logo-img-header-landing" src="/media/drawlogoloop1.gif" alt="nonologo" />
                    </a>
                    <h1 className="lander-text-header">walrusdog</h1>
                    <p className="lander-text-desc">art | game design | web dev</p>
                    <p className="lander-text-desc">let's get started, yeah?</p>
                    <Link className="enter-text" href="/landing">- enter -</Link>
                </div>
            </div>
        </div>
    </section>
    </main>
    </>
    )
}
