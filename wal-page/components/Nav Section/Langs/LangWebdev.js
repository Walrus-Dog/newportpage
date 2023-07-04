import React from "react";
import Link from "next/link";

export default function LangWebdev() {
    return(
        <section class="lang-select webdev-lang-sec d-flex justify-content-center">
            <Link className="flag-css" href="/webdev">🇺🇸</Link>
            <Link className="flag-css" href="/webdev-jp">🇯🇵</Link>
        </section>
    )
}