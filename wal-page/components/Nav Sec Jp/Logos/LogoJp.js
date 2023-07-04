import React from "react";
import Link from "next/link"

export default function LogoJp() {
    return (
        <section className="logo-section">
            <Link href="/landing-jp">
                <img className="img logo-img-header" src="/media/WDred.png" alt="nonologo" />
            </Link>
        </section>
    )
}