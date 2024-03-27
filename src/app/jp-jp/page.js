"use client"
import React, { useState } from "react";
import Head from "../../../components/Head/Head";
import LogoJpJp from "../../../components/Nav Sec Jp/Logos/LogoJp";
import NavJpJp from "../../../components/Nav Sec Jp/Navs/NavJpJp";
import SocialAboutJp from "../../../components/Nav Sec Jp/Socials/SocialAboutJp";
import LangJp from "../../../components/Nav Section/Langs/LangJp";
import ColophonAboutJp from "../../../components/Nav Sec Jp/Colophons/ColophoneAboutJp";
import HeaderJpSmallJp from "../../../components/NavSecSmallJp/HeadersJp/HeaderSmallJpJp";
import ColophonSmallJpJp from "../../../components/NavSecSmallJp/ColophonSmallJp/ColophonSmallJpJp";

export default function JpJp() {
    return(
        <>
        <Head />
            <section class="jp">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <LogoJpJp />
                            <NavJpJp />
                            <SocialAboutJp />
                            <LangJp />
                            <ColophonAboutJp />
                        </div>
                        <div class="col-md-8">
                            <section class="jp-info">
                                <div class="jp-header">
                                    <h1 class="jp-header-text">
                                        日本語 
                                    </h1>
                                </div>
                                <div class="jp-info-div">
                                    <p class="jp-text">
                                        <p>2014年末に外国語を学ぼうと決心し、書類上は2014年から勉強していますが、学校や仕事、その他様々な要因で、合計で3年ほどしか勉強していません。しかし最近、今年（2024年）に日本語能力試験 (JLPT) 5級、4級、そして多分3級を受験して合格したいと思い、再び本格的に勉強を始めています。</p>
                                        <br />
                                        <p>日本語を学ぶという当初の目的はもうとっくに過ぎ去り、私の目標は、日本語のスキルを活かして日本で就職し、いずれは日本に移住することだ。1年か2年以内に初めて日本を旅行できるようになりたいと思っている。</p>
                                        <br />
                                        <p>このトピックについて質問があれば、いつものようにメールをください！そして、これを読んでいる日本の雇用主の方、こんにちは！私のポートフォリオをご覧いただきありがとうございます！ご黒様でした！</p>
                                    </p>
                                </div>
                                <div id="nonoDoodleDiv" className="nono-doodle-div">
                                    <img id="nonoDoodle" className="d-sm-none d-md-block nono-doodle1 nono-doodle nono-doodle4" src="/media/nonodoodles/drawnonodoodlesite4.png" />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <section className="jp-small">
                <HeaderJpSmallJp />
                <div className="container">
                    <div className="row">
                        <section class="jp-info">
                            <div class="jp-header-small">
                                <h1 class="jp-header-text">
                                    日本語
                                </h1>
                            </div>
                            <div class="jp-info-div-small">
                                <p class="jp-text-small">
                                        <p>2014年末に外国語を学ぼうと決心し、書類上は2014年から勉強していますが、学校や仕事、その他様々な要因で、合計で3年ほどしか勉強していません。しかし最近、今年（2024年）に日本語能力試験 (JLPT) 5級、4級、そして多分3級を受験して合格したいと思い、再び本格的に勉強を始めています。</p>
                                        <br />
                                        <p>日本語を学ぶという当初の目的はもうとっくに過ぎ去り、私の目標は、日本語のスキルを活かして日本で就職し、いずれは日本に移住することだ。1年か2年以内に初めて日本を旅行できるようになりたいと思っている。</p>
                                        <br />
                                        <p>このトピックについて質問があれば、いつものようにメールをください！そして、これを読んでいる日本の雇用主の方、こんにちは！私のポートフォリオをご覧いただきありがとうございます！ご黒様でした！</p>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
                <ColophonSmallJpJp />
            </section>
        </>
    )
}