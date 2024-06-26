import React from "react";
import Link from "next/link"

export default function NavWebdevJp() {
    return (
        <section className="nav-section">
            <div className="nav-wrapper webdev-nav-wrapper">
                <div className="nav-wrapper-inner">
                    <Link className="landing-link nav-link1" href="/about-jp">| について</Link>
                    <Link className="landing-link nav-link2" href="/art-jp">| アート</Link>
                    <Link className="landing-link nav-link1" href="/games-jp">| ゲーム</Link>
                    <Link className="landing-link nav-link2" href="/jp-jp">| 日本語</Link>
                    <Link className="landing-link nav-link1" href="/webdev-jp"><span class="webdev-highlight-span">| ウェブ開発</span></Link>
                </div>
            </div>
        </section>
    )
}