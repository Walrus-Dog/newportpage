import React from "react"
import Head from "../../../components/Head/Head"
import LogoLanding from "../../../components/Nav Section/Logos/LogoLanding"
import NavLanding from "../../../components/Nav Section/Navs/NavLanding"
import Social from "../../../components/Nav Section/Socials/Social"
import Lang from "../../../components/Nav Section/Langs/Lang"
import Colophon from "../../../components/Nav Section/Colophons/Colophon"
import LandingSmall from "../../../components/NavSecSmall/Headers/LandingSmall"

export default function Landing() {
    return (
        <>
        <Head />
        <section id="#home" className="landing">
            <div className="container-fluid">
                <div className="row">
                    <div className="landing-nav col-md-4 col-sm-12">
                        <LogoLanding />
                        <NavLanding />
                        <Social />
                        <Lang />
                        <Colophon />
                    </div>
                </div>
            </div>
        </section>
        <section id="#home" className="landing-small">
            <div className="container-fluid">
                <div className="row">
                    <div className="landing-nav-small col-md-12">
                        <LandingSmall />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}