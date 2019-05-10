import Head from "next/head"
import asset from "next/asset"
import { withNamespaces } from "react-i18next"

import Header from "components/Header"
import Partners from "components/Partners"
import Footer from "components/Footer"
import Piwik from "components/Piwik"
import "styles/theme.scss"


const Communaute =  withNamespaces("community")(
    ({t}, props) => (
        <div className="content">
            <section>
                <h2>{t('title-who')}</h2>
                <div className="flex__container">
                    <div className="flex__item50">
                        <p>
                            {t('content-who-1')}
                            <a href="https://beta.gouv.fr/">BetaGouv</a> & <a href="https://www.etalab.gouv.fr/">Etalab</a>
                            {t('content-who-2')}
                            <br/>
                            <br/>
                            {t('content-who-3')}
                            <br/>
                            <br/>
                            {t('content-who-4')}
                        </p>
                    </div>
                    <div className="flex__item50">
                        <img src={asset("/images/community.png")} alt="" />
                    </div>
                </div>
            </section>

            <section>
                <h2>{t('title-reach')}</h2>
                <div className="flex__column">
                    <div className="flex__item50">
                        <p>{t('content-reach')}</p>
                    </div>
                    <a className="btn medium" href="https://forms.gle/XFxiFvfaAa6w7LGy7">
                        {t('btn-slack')}
                    </a>
                </div>
            </section>

            <section>
                <h2>{t('title-contact')}</h2>
                <div className="flex__column">
                    <div className="flex__item50">
                        <p>{t('content-contact')}</p>
                    </div>
                    <div>
                        <a
                            className="btn medium"
                            href="mailto:%63%6fn&#116;&#97;%63%74&#64;%6f%70%65%6efi&#115;&#99;a%2e&#111;&#114;&#103;"
                        >
                            {t('link-contact')}
                        </a>
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                    p a {
                        color: #6d69fb;
                        margin: 0;
                    }

                    medium {
                      display: flex;
                    }

                    @media(min-width: 40rem) {
                      .flex__item50 {
                        width: 50%;
                        padding-left: 1rem;
                        display: flex;
                    }
                `}
            </style>
        </div>
    )
)


export default withNamespaces("community")(
    ({t}) => (
        <div>
            <Head>
                <title>{t('title')}</title>
                <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header page="community" title={t('title')} />
            <Communaute />
            <Partners />
            <Footer />
            <Piwik page="community" />
        </div>
    )
)
