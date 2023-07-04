import React from "react";
import Link from "next/link";

export default function LangArt() {
    return(
        <section class="lang-select art-lang-sec d-flex justify-content-center">
            <Link className="flag-css" href="/art">🇺🇸</Link>
                <Link className="flag-css" href="/art-jp">🇯🇵</Link>
        </section>
    )
}