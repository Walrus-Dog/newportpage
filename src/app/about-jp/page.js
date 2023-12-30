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
                                    <br />
                                    <p>私の名前はパトリック。僕はWalrusDogというブランド名で活動している。私はクリエイターであり、デベロッパーであり、アーティストです。</p>
                                    <br />
                                    <p>2022年にミシシッピ・コーディング・アカデミーを卒業し、ウェブ開発／デザイン、ゲームデザイン、アートに情熱を注いでいます。クリエイティブなことの方が得意ですが、技術的なことに取り組むのも怖くありません。誰でも何でも学べるという信念があり、課題を提示されたら真剣に取り組みます。</p>
                                    <br />
                                    <p>このページに掲載されているアートは、すべて私の手によるものだ！デジタルペインティングとデジタルデザインを学んで、自分のゲームのアートやアセットを作れるようになったんだ。</p>
                                    <p>私は今、初めての完全なビデオゲームを作っている最中で、最新情報はここやゲーム専用サイト、あるいは僕のツイッターでチェックしてほしい！</p>
                                    <br />
                                    <p>もっと詳しい情報を知りたい方は、メールかソーシャルメディアでメッセージを送ってください。一緒にクールなものを作れることを願っています！</p>
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
                                <p>私の名前はパトリック。私はWalrusDogというブランド名で活動している。私はクリエイターであり、デベロッパーであり、アーティストです。</p>
                                <p>2022年にミシシッピ・コーディング・アカデミーを卒業し、ウェブ開発／デザイン、ゲームデザイン、アートに情熱を注いでいます。クリエイティブなことの方が得意ですが、技術的なことに取り組むのも怖くありません。誰でも何でも学べるという信念があり、課題を提示されたら真剣に取り組みます。</p>
                                <p>このページに掲載されているアートは、すべて僕の手によるものだ！デジタルペインティングとデジタルデザインを学んで、自分のゲームのアートやアセットを作れるようになったんだ。</p>
                                <p>私は今、初めての完全なビデオゲームを作っている最中で、最新情報はここやゲーム専用サイト、あるいは僕のツイッターでチェックしてほしい！</p>
                                <p>もっと詳しい情報を知りたい方は、メールかソーシャルメディアでメッセージを送ってください。一緒にクールなものを作れることを願っています！</p>
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