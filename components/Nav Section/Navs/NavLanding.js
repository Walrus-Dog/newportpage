import React from "react";
import Link from "next/link"

export default function NavLanding() {
    return (
        <section className="nav-section nav-landing">
            <div className="nav-wrapper d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <div className="nav-wrapper-inner">
                    <Link className="landing-link nav-link1" href="/about">| about</Link>
                    <Link className="landing-link nav-link2" href="/art">| art</Link>
                    <Link className="landing-link nav-link1" href="/games">| games</Link>
                    <Link className="landing-link nav-link2" href="/jp">| jp</Link>
                    <Link className="landing-link nav-link1" href="/webdev">| web dev</Link>
                </div>
            </div>
        </section>
    )
}