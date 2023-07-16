import React from "react";
import Link from "next/link"

export default function NavGames() {
    return (
        <section className="nav-section">
            <div className="nav-wrapper games-nav-wrapper">
                <div className="nav-wrapper-inner">
                    <Link className="landing-link nav-link1" href="/about">| about</Link>
                    <Link className="landing-link nav-link2" href="/art">| art</Link>
                    <Link className="landing-link nav-link1" href="/games"><span class="games-highlight-span">| games</span></Link>
                    <Link className="landing-link nav-link2" href="/jp">| jp</Link>
                    <Link className="landing-link nav-link1" href="/webdev">| web dev</Link>
                </div>
            </div>
        </section>
    )
}