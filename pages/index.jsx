import Head from "next/head"
import { withNamespaces } from "react-i18next"

import GlobalStyle from "../components/GlobalStyle"
import Piwik from "../components/Piwik"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Hero from "../components/Hero"


const Home =  withNamespaces()(({t}, props) => (
    <div className="content">
        <section>
            <h2>{t('everything')}</h2>
            <div>
                <ul className="flex__container">
                    <li className="card">
                        <h3><img src="/static/icons/economistes.svg" alt=""/>{t('title-economists')}</h3>
                        {t('content-economists')}
                    </li>
                    <li className="card">
                        <h3 className=""><img className="" src="/static/icons/admin.svg" alt=""/>{t('title-admin')}</h3>
                        {t('content-admin')}
                    </li>
                    <li className="card">
                        <h3><img src="/static/icons/dev.svg" alt=""/>{t('title-dev')}</h3>
                        {t('content-dev')}
                    </li>
                </ul>
                <a className="btn medium" href="/showcase/">{t('everything-cta')}</a>
            </div>
        </section>

    <section>
        <h2>{t('title-how')}</h2>
        <p>{t('content-how')}</p>
        <div className="flex__container">
            <div className="flex__item50">
                <img src="/static/images/openlaw.png" alt=""/>
            </div>
            <div className="flex__item50">
                <ul>
                    <li>{t('feature1-list-a')}</li>
                    <li>{t('feature1-list-b')}</li>
                    <li>{t('feature1-list-c')}</li>
                    <a className="btn medium" href="resources">{t('feature1-cta')}</a>
                </ul>
            </div>
        </div>
    </section>

    <section className="flex__container">
        <div className="flex__item50">
            <div className="flex__column">
                <ul>
                    <li>{t('feature2-list-a')}</li>
                    <li>{t('feature2-list-b')}</li>
                    <li>{t('feature2-list-c')}</li>
                    <a className="btn medium" href="https://fr.openfisca.org/legislation/swagger">{t('feature2-cta')}</a>
                </ul>
            </div>
        </div>
        <div className="flex__item50" >
            <img src="/static/images/api.png" alt="" />
        </div>
    </section>

    <section>
        <h2>{t('title-community')}</h2>
        <div className="flex__container"> 
            <div className="flex__item50">
                <p>{t('content-community')}</p>
            </div>
            <div className="flex__item50">
                <img src="/static/images/community.png" alt=""/>
            </div>
        </div>
    </section>

    <style jsx>
        {`
            section {
                margin-bottom: 6em;
            }

            li {
                list-style: none;
            }

            .card img {
                width: 3em;
            }

            .card h3 {
                display: flex;
            }

            .flex__item50 li {
                list-style-image : url(/static/items/bullet.svg);
                padding: 1rem;
            }

            .flex__column {
                display: flex;
                flex-direction: column;
                padding-left: 1rem;
            }

            @media(max-width: 50rem) { //small screen (50rem = 600px with font 12)
                .flex__container {
                    flex-flow: row wrap;
                }
            }

            @media(min-width: 75rem) { //wide screen (75rem = 900px with font 12)
                .flex__item50 {
                    width: 50%;
                    padding-left: 1rem;
                    display: flex;
                }
            }
        `}
    </style>
</div>))


export default withNamespaces()(({t}) => (
        <div>
            <Head>
                <title>{t('title')}</title>
                <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <GlobalStyle/>
            <Hero/>
            <Home page="Home" title="{t('title')}" />
            <Partners />
            <Footer />
            <Piwik page="HomePage"/>
        </div>
    )
)
