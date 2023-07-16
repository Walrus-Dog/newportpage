import React from "react";
import Link from "next/link"

export default function LogoWebdev() {
    return (
        <section className="logo-section">
            <Link href="/landing">
                <img className="img logo-img-header" src="/media/WDoffwhite.png" alt="nonologo" />
            </Link>
        </section>
    )
}