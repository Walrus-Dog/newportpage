import React from "react";
import Link from "next/link";

export default function Lang() {
    return(
        <section class="lang-select landing-lang d-flex justify-content-center">
            <>
                <Link className="flag-css" href="/landing">🇺🇸</Link>
                <Link className="flag-css" href="/landing-jp">🇯🇵</Link>
            </>
        </section>
    )
}