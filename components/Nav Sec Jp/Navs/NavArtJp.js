import React from "react";
import Link from "next/link"

export default function NavArtJp() {
    return (
        <section className="nav-section">
            <div className="nav-wrapper art-nav-wrapper">
                <div className="nav-wrapper-inner">
                    <Link className="landing-link nav-link1" href="/about-jp">| について</Link>
                    <Link className="landing-link nav-link2" href="/art-jp"><span class="art-highlight-span">| アート</span></Link>
                    <Link className="landing-link nav-link1" href="/games-jp">| ゲーム</Link>
                    <Link className="landing-link nav-link2" href="/jp-jp">| 日本語</Link>
                    <Link className="landing-link nav-link1" href="/webdev-jp">| ウェブ開発</Link>
                </div>
            </div>
        </section>
    )
}