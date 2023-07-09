import React from "react";
import Link from "next/link";

export default function LangJp() {
    return(
        <section class="lang-select d-flex justify-content-center">
            <Link className="flag-css" href="/jp">🇺🇸</Link>
            <Link className="flag-css" href="/jp-jp">🇯🇵</Link>
        </section>
    )
}