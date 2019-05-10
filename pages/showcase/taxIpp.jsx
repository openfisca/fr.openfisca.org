import { withNamespaces } from "react-i18next"
import Head from "next/head"

import GlobalStyle from "../../components/GlobalStyle"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Piwik from "../../components/Piwik"
import ProjectDesc from "../../components/ProjectDesc"
import ProjectAttribute from "../../components/ProjectAttribute"


const Taxipp =  withNamespaces("taxipp")(
    ({t}, props) => (
        <div className="content">
            <a className="outline" href="/showcase/">
                {t('back')}
            </a>

            <ProjectDesc
                img="/static/projects/taxipp.png"
                baseline={t('baseline')}
                desc1={t('desc1')}
                desc2={t('desc2')}
                desc3={t('desc3')}
                url="https://www.ipp.eu/outils/taxipp-outils/"
                textlink={t('textlink')}
            />

            <section>
                <h2>{t('car')}</h2>
                <ProjectAttribute
                    imgapi="/static/icons/circle/python.svg"
                    api={t('api')}
                    imgcountry="/static/icons/circle/france.svg"
                    country={t('country')}
                    imgsimulation="/static/icons/circle/simupopulation.svg"
                    simulation={t('simulation')}
                    imgperimetre="/static/icons/circle/perimetre.svg"
                    perimetre={t('perimetre')}
                    imgpoweredby="/static/icons/circle/economistes.svg"
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


export default withNamespaces("taxipp")(
    ({t}) => (
        <div>
            <Head>
                <title>{t('title')}</title>
                <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <GlobalStyle />
            <Header page="taxipp" title={t('title')} />
            <Taxipp />
            <Footer />
            <Piwik page="taxipp" />
        </div>
    )
)
