import React from "react";
import Link from "next/link"

export default function NavWebdev() {
    return (
        <section className="nav-section">
            <div className="nav-wrapper webdev-nav-wrapper">
                <div className="nav-wrapper-inner">
                    <Link className="landing-link nav-link1" href="/about">| about</Link>
                    <Link className="landing-link nav-link2" href="/art">| art</Link>
                    <Link className="landing-link nav-link1" href="/games">| games</Link>
                    <Link className="landing-link nav-link2" href="/jp">| jp</Link>
                    <Link className="landing-link nav-link1" href="/webdev"><span class="webdev-highlight-span">| web dev</span></Link>
                </div>
            </div>
        </section>
    )
}