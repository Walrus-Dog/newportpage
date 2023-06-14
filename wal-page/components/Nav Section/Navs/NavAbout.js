import React from "react";
import Link from "next/link";

export default function NavAbout() {
    return (
        <section class="nav-section">
            <div class="nav-wrapper">
                <div class="nav-wrapper-inner">
                    <Link className="landing-link nav-link1" href="/about"><span class="about-highlight-span">| about</span></Link>
                    <Link className="landing-link nav-link2" href="/art">| art</Link>
                    <Link className="landing-link nav-link1" href="/games">| games</Link>
                    <Link className="landing-link nav-link2" href="/jp">| jp</Link>
                    <Link className="landing-link nav-link1" href="/webdev">| web dev</Link>
                </div>
            </div>
        </section>
    )
}