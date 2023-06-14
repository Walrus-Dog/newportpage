import React from "react";
import Link from "next/link"

export default function LogoLanding() {
    return (
        <section className="logo-section">
            <Link href="/landing">
                <img className="img logo-img-header" src="/media/WDblack.png" alt="nonologo" />
            </Link>
        </section>
    )
}