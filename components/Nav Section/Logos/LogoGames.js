import React from "react";
import Link from "next/link"

export default function LogoGames() {
    return (
        <section className="logo-section">
            <Link href="/landing">
                <img className="img logo-img-header" src="/media/logos/WDorange.png" alt="nonologo" />
            </Link>
        </section>
    )
}