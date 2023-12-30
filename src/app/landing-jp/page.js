import React from "react"
import Head from "../../../components/Head/Head"
import LogoLandingJp from "../../../components/Nav Sec Jp/Logos/LogoLandingJp"
import NavLandingJp from "../../../components/Nav Sec Jp/Navs/NavLandingJp"
import SocialJp from "../../../components/Nav Sec Jp/Socials/SocialJp"
import Lang from "../../../components/Nav Section/Langs/Lang"
import ColophonJp from "../../../components/Nav Sec Jp/Colophons/ColophonJp"
import LandingSmallJp from "../../../components/NavSecSmallJp/HeadersJp/LandingPageSmallJp"

export default function LandingJp() {
    return (
        <>
        <Head />
        <section id="#home" className="landing">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <LogoLandingJp />
                        <NavLandingJp />
                        <SocialJp />
                        <Lang />
                        <ColophonJp />
                    </div>
                </div>
            </div>
        </section>
        <section id="#home" className="landing-small">
            <div className="container-fluid">
                <div className="row">
                    <div className="landing-nav-small col-md-12">
                        <LandingSmallJp />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}