import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function HeaderJpSmallJp() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
        const burger = document.querySelectorAll('.burger-button');
        burger.forEach (burgerButton => {
            burgerButton.classList.toggle("open");
        });
    };

    return(
        <section className="header-small-root">
            <div className="container-fluid">
                <div className="row">
                    <section className="header-small header-jp-small">
                        <div className="header-small-wrapper d-flex justify-content-around">
                            <div className="col-4">
                                <section className="logo-section-small d-flex">
                                    <Link href="/landing-jp">
                                        <img className="img logo-img-header-small-about landing-logo-small" src="/media/logos/WDred.png" alt="nonologo" />
                                    </Link>
                                </section>
                            </div>
                            <section className="lang-section-small-header">
                                <div className="col-4">
                                    <section class="lang-select-small-header d-flex justify-content-center">
                                        <>
                                            <Link className="flag-css" href="/jp">🇺🇸</Link>
                                            <Link className="flag-css" href="/jp-jp">🇯🇵</Link>
                                        </>
                                    </section>
                                </div>
                            </section>
                            <section className="hamburger-small d-flex justify-content-end">
                                <div className="col-4">
                                    <div onClick={handleClick} className="burger-button">
                                        <span className={`burger-line jp-burger-line`}></span>
                                        <span className={`burger-line jp-burger-line`}></span>
                                        <span className={`burger-line jp-burger-line`}></span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="nav-small d-flex justify-content-center">
                        <div className="nav-wrapper-small-about">
                            <div id="navSmalll" className="nav-wrapper-inner-small-about" style={{display: isOpen?"block":"none"}}>
                                <Link className="landing-link-small nav-link1-small d-flex justify-content-center" href="/about-jp">| について |</Link>
                                <Link className="landing-link-small nav-link2-small d-flex justify-content-center" href="/art-jp">| アート |</Link>
                                <Link className="landing-link-small nav-link1-small d-flex justify-content-center" href="/games-jp">| ゲーム |</Link>
                                <Link className="landing-link-small nav-link2-small d-flex justify-content-center" href="/jp-jp">| 日本語 |</Link>
                                <Link className="landing-link-small nav-link1-small d-flex justify-content-center" href="/webdev-jp">| ウェブ開発 |</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}