import React from "react";
import Link from "next/link"

export default function LogoArt() {
    return (
        <section className="logo-section">
            <Link href="/landing">
                <img className="img logo-img-header" src="/media/logos/WDdarkerred.png" alt="nonologo" />
            </Link>
        </section>
    )
}