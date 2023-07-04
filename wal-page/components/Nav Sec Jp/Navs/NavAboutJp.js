import React from "react";
import Link from "next/link";

export default function NavAboutJp() {
    return (
        <section class="nav-section">
            <div class="nav-wrapper">
                <div class="nav-wrapper-inner">
                    <Link className="landing-link nav-link1" href="/about-jp"><span class="about-highlight-span">| について</span></Link>
                    <Link className="landing-link nav-link2" href="/art-jp">| アート</Link>
                    <Link className="landing-link nav-link1" href="/games-jp">| ゲーム</Link>
                    <Link className="landing-link nav-link2" href="/jp-jp">| 日本語</Link>
                    <Link className="landing-link nav-link1" href="/webdev-jp">| ウェブ開発</Link>
                </div>
            </div>
        </section>
    )
}