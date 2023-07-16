import React from "react";
import Link from "next/link";

export default function LangGames() {
    return(
        <section class="lang-select games-lang-sec d-flex justify-content-center">
            <Link className="flag-css" href="/games">🇺🇸</Link>
            <Link className="flag-css" href="/games-jp">🇯🇵</Link>
        </section>
    )
}