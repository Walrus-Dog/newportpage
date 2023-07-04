import React from "react"
import Head from "../../../components/Head/Head"
import LogoLanding from "../../../components/Nav Section/Logos/LogoLanding"
import NavLandingJp from "../../../components/Nav Sec Jp/Navs/NavLandingJp"
import SocialJp from "../../../components/Nav Sec Jp/Socials/SocialJp"
import Lang from "../../../components/Nav Section/Langs/Lang"
import ColophonJp from "../../../components/Nav Sec Jp/Colophons/ColophonJp"

export default function LandingJp() {
    return (
        <>
        <Head />
        <section id="#home" className="landing">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <LogoLanding />
                        <NavLandingJp />
                        <SocialJp />
                        <Lang />
                        <ColophonJp />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}