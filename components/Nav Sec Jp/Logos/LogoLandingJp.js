import React from "react";
import Link from "next/link"

export default function LogoLandingJp() {
    return (
        <section className="logo-section">
            <Link href="/landing-jp">
                <img className="img logo-img-header landing-logo" src="/media/WDblack.png" alt="nonologo" />
            </Link>
        </section>
    )
}