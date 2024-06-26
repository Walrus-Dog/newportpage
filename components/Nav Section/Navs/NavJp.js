import React from "react";
import Link from "next/link"

export default function NavJp() {
    return (
        <section className="nav-section">
            <div className="nav-wrapper">
                <div className="nav-wrapper-inner">
                    <Link className="landing-link nav-link1" href="/about">| about</Link>
                    <Link className="landing-link nav-link2" href="/art">| art</Link>
                    <Link className="landing-link nav-link1" href="/games">| games</Link>
                    <Link className="landing-link nav-link2" href="/jp"><span class="jp-highlight-span">| jp</span></Link>
                    <Link className="landing-link nav-link1" href="/webdev">| web dev</Link>
                </div>
            </div>
        </section>
    )
}