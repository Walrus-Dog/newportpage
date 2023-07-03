import React from "react";
import Head from "../../../components/Head/Head";
import LogoJp from "../../../components/Nav Section/Logos/LogoJp";
import NavJp from "../../../components/Nav Section/Navs/NavJp";
import Social from "../../../components/Nav Section/Socials/Social";
import Lang from "../../../components/Nav Section/Langs/Lang";
import Colophon from "../../../components/Nav Section/Colophons/Colophon";

export default function Jp() {
    return(
        <>
        <Head />
            <section class="jp">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <LogoJp />
                            <NavJp />
                            <Social />
                            <Lang />
                            <Colophon />
                        </div>
                        <div class="col-md-8">
                            <section class="jp-info">
                                <div class="jp-header">
                                    <h1 class="jp-header-text">
                                        japanese
                                    </h1>
                                </div>
                                <div class="jp-info-div">
                                    <p class="jp-text">
                                        <p>Cultures and history have long been an intense interest of mine. For several years now I have been studying the Japanese language in my free time. I have always wanted to learn a language and after messing around with a few others, I finally decided to focus all in on Japanese.</p>
                                        <p>I’m not sure how long it’s been now, but my progress has not been very fast due to school, work and other factors. However I always come back to it and try to learn as much about it as I can when I can. Due to the nature of languages and having to keep on top of them daily, I sometimes have to relearn things that I once knew. Though I don’t see this as a problem as you can never review something enough.</p>
                                        <p>I consider myself decent enough. I would say I’m in that mid range between N5 and N4 with random bits of other knowledge spread around in the mix. My metric is that if I was dropped in Japan in some random spot, I could find my way back easily enough. </p>
                                        <p>My skills in the language are only growing upwards! It’s my goal to one day become fluent and help to localize or work on Japanese games and media. If you have any more questions please contact me!</p>

                                        
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}