import { withNamespaces } from "react-i18next"
import Head from "next/head"

import GlobalStyle from "../../components/GlobalStyle"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Piwik from "../../components/Piwik"
import ProjectDesc from "../../components/ProjectDesc"
import ProjectAttribute from "../../components/ProjectAttribute"


const Ratesrebates =  withNamespaces("ratesrebates")(
    ({t}, props) => (
        <div className="content">
            <a className="outline" href="/showcase/">
                {t('back')}
            </a>

            <ProjectDesc 
                img="/static/projects/ratesrebates.png"
                baseline={t('baseline')}
                desc1={t('desc1')}
                desc2={t('desc2')}
                desc3={t('desc3')}
                url="https://www.digital.govt.nz/blog/making-it-easier-the-rates-rebates-story-so-far/"
                textlink={t('textlink')}
            />

            <section>
                <h2>{t('car')}</h2>
                <ProjectAttribute
                    imgapi="/static/icons/circle/api.svg"
                    api={t('api')}
                    imgcountry="/static/icons/circle/nz.svg"
                    country={t('country')}
                    imgsimulation="/static/icons/circle/simindividuelle.svg"
                    simulation={t('simulation')}
                    imgperimetre="/static/icons/circle/perimetre.svg"
                    perimetre={t('perimetre')}
                    imgpoweredby="/static/icons/circle/admin.svg"
                    poweredby={t('poweredby')}
                />
            </section>

            <style jsx>
                {`
                    .outline {
                        color: #656565;
                        padding: 0 1% 0 1%;
                        border-color: #656565;
                        border-radius: 25px;
                        max-width: 4em;
                    }
                `}
            </style>
        </div>
    )
)


export default withNamespaces("ratesrebates")(
    ({t}) => (
        <div>
            <Head>
                <title>{t('title')}</title>
                <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <GlobalStyle />
            <Header page="ratesrebates" title={t('ratesrebates:title')} />
            <Ratesrebates />
            <Footer />
            <Piwik page="ratesrebates" />
        </div>
    )
)
