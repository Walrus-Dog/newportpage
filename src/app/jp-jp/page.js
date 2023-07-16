import React from "react";
import Head from "../../../components/Head/Head";
import LogoJpJp from "../../../components/Nav Sec Jp/Logos/LogoJp";
import NavJpJp from "../../../components/Nav Sec Jp/Navs/NavJpJp";
import SocialAboutJp from "../../../components/Nav Sec Jp/Socials/SocialAboutJp";
import LangJp from "../../../components/Nav Section/Langs/LangJp";
import ColophonAboutJp from "../../../components/Nav Sec Jp/Colophons/ColophoneAboutJp";

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
                                        <p>文化や歴史は長い間、私の強い関心事だった。数年前から空いた時間に日本語を勉強している。以前から語学を学びたいと思っていて、いくつか他の言語にも手を出したが、最終的に日本語に集中することにした。</p>
                                        <br />
                                        <p>もう何年になるかわからないが、学校や仕事、その他の要因のために、私の進歩はあまり速くない。しかし、できる限り多くのことを学ぼうと思っています。語学の性質上、毎日勉強し続けなければならないので、一度覚えたことを勉強し直さなければならないこともある。でも、復習を十分にすることはできないので、問題だとは思っていません。</p>
                                        <br />
                                        <p>自分では十分まともだと思っている。N5とN4の中間くらいで、他の知識も適当に混ざっている。僕の指標は、もし僕が日本で適当な場所に落とされたとしても、簡単に帰り道を見つけられるということだ。</p>
                                        <br />
                                        <p>日本語のスキルはどんどん上がっています！いつかペラペラになって、日本のゲームやメディアのローカライズや仕事を手伝うのが目標です。また何か質問があればご連絡ください！</p>

                                        
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