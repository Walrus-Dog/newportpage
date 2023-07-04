import React from "react";
import Link from "next/link";

export default function LangAbout() {
    return(
        <section class="lang-select d-flex justify-content-center">
            <>
                <Link className="flag-css" href="/about">🇺🇸</Link>
                <Link className="flag-css" href="/about-jp">🇯🇵</Link>
            </>
        </section>
    )
}