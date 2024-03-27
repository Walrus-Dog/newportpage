"use client"
import React from "react";
import Head from "../../../components/Head/Head"
import LogoAboutJp from "../../../components/Nav Sec Jp/Logos/LogoAboutJp";
import NavAboutJp from "../../../components/Nav Sec Jp/Navs/NavAboutJp";
import SocialAboutJp from "../../../components/Nav Sec Jp/Socials/SocialAboutJp";
import LangAbout from "../../../components/Nav Section/Langs/LangAbout"
import ColophonAboutJp from "../../../components/Nav Sec Jp/Colophons/ColophoneAboutJp";
import ColophonSmallJp from "../../../components/NavSecSmallJp/ColophonSmallJp/ColophonSmallJp";
import HeaderSmallJp from "../../../components/NavSecSmallJp/HeadersJp/HeaderSmallJp";

export default function AboutJp() {
    return(
        <>
        <Head />
        <section class="about">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                            <LogoAboutJp />
                            <NavAboutJp />
                            <SocialAboutJp />
                            <LangAbout />
                            <ColophonAboutJp />
                    </div>
                    <div class="col-md-8">
                        <section class="about-info">
                            <div class="about-header">
                                <h1 class="about-header-text">
                                    について
                                </h1>
                            </div>
                            <div class="about-info-div">
                                <p class="about-text">
                                    <p>こんにちは！</p>
                                    <p>私の名前はパトリック、オンラインではWalrusDogとして知られている。ウェブ開発者として、ゲーム開発とデジタル・アート・シーンに足を踏み入れている。スキルはどんどん上達しているけれど、僕は貪欲に学ぶタイプで、技術的な仕事でもクリエイティブな面が役立っていると思うことが多いんだ。</p>
                                    <p>私は2022年にMississippi Coding Academiesを卒業し、様々な種類のプロジェクトにとても情熱を持っています。現在、HTML、CSS、JS、NEXT、React、C#、Unity、Python、MySQLに精通しており、多くの種類のプロジェクトを完成させるために、新しくエキサイティングなツールセットを学ぶ意欲があります。</p>
                                    <p>このウェブサイトは、私のアートの例、様々なゲームやウェブ開発のプロジェクト、そして流暢な日本語を話すようになるまでの道のりなど、私の様々な興味を紹介するために作りました。私が冒険を楽しんでいるように、皆さんも私の冒険を楽しんでください。</p>
                                    <p>私のウェブサイトに掲載されていることについて、あるいは一緒にプロジェクトを進めることにご興味がある方は、<span className="about-email"><a href="">walrusdog@gmail.com</a></span> までメールでご連絡ください。</p>
                                </p>
                            </div>
                            <div id="nonoDoodleDiv" className="nono-doodle-div">
                                <img id="nonoDoodle" className="d-sm-none d-md-block nono-doodle1 nono-doodle" src="/media/nonodoodles/drawnonodoodlesite1.png" />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        <section className="about-small">
            <HeaderSmallJp />
            <div className="container">
                <div className="row">
                    <section class="about-info-small">
                        <div class="about-header-small">
                            <h1 class="about-header-text">
                                について
                            </h1>
                        </div>
                        <div class="about-info-div-small">
                            <p class="about-text">
                                <p>こんにちは！</p>
                                <p>私の名前はパトリック、オンラインではWalrusDogとして知られている。ウェブ開発者として、ゲーム開発とデジタル・アート・シーンに足を踏み入れている。スキルはどんどん上達しているけれど、僕は貪欲に学ぶタイプで、技術的な仕事でもクリエイティブな面が役立っていると思うことが多いんだ。</p>
                                <p>私は2022年にMississippi Coding Academiesを卒業し、様々な種類のプロジェクトにとても情熱を持っています。現在、HTML、CSS、JS、NEXT、React、C#、Unity、Python、MySQLに精通しており、多くの種類のプロジェクトを完成させるために、新しくエキサイティングなツールセットを学ぶ意欲があります。</p>
                                <p>このウェブサイトは、私のアートの例、様々なゲームやウェブ開発のプロジェクト、そして流暢な日本語を話すようになるまでの道のりなど、私の様々な興味を紹介するために作りました。私が冒険を楽しんでいるように、皆さんも私の冒険を楽しんでください。</p>
                                <p>私のウェブサイトに掲載されていることについて、あるいは一緒にプロジェクトを進めることにご興味がある方は、<span className="about-email"><a href="">walrusdog@gmail.com</a></span> までメールでご連絡ください。</p>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <ColophonSmallJp />
        </section>
        </>
    )
}