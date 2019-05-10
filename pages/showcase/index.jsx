import { withNamespaces } from "react-i18next"
import Head from "next/head"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Piwik from "../../components/Piwik"
import CardProject from "../../components/CardProject"


const Showcase =  withNamespaces("showcase")(
    ({t}, props) => (
        <div className="content">
            <ul className="flex__container">
                <li className="flex__item">
                    <a href="mesAides" >
                        <CardProject
                            img="/static/projects/mesaides.png"
                            title={t('title-mesaides')}
                            desc={t('desc-mesaides')} 
                            attribute1={t('fr')}
                            attribute2={t('apiweb')}
                            attribute3={t('social')}
                        />
                    </a>
                </li>
                <li className="flex__item">
                    <a href="lexImpact" >
                        <CardProject
                            img="/static/projects/leximpact.png"
                            title={t('title-lex')}
                            desc={t('desc-lex')} 
                            attribute1={t('fr')}
                            attribute2={t('apipython')}
                            attribute3={t('reforms')}
                        />
                    </a>
                </li>
                <li className="flex__item">
                    <a href="taxIpp" >
                        <CardProject
                            img="/static/projects/taxipp.png"
                            title={t('title-tax')}
                            desc={t('desc-tax')} 
                            attribute1={t('fr')}
                            attribute2={t('apipython')}
                            attribute3={t('reforms')}
                        />
                    </a>
                </li>
                <li className="flex__item">
                    <a href="ratesRebates" >
                        <CardProject
                            img="/static/projects/ratesrebates.png"
                            title={t('title-rates')}
                            desc={t('desc-rates')} 
                            attribute1={t('nz')}
                            attribute2={t('apiweb')}
                            attribute3={t('social')}
                        />
                    </a>
                </li>
                <li className="flex__item">
                    <a href="fastoche" >
                        <CardProject
                            img="/static/projects/fastoche.png"
                            title={t('title-fastoche')}
                            desc={t('desc-fastoche')} 
                            attribute1={t('fr')}
                            attribute2={t('apiweb')}
                            attribute3={t('social')}
                        />
                    </a>
                </li>
            </ul>


            <style jsx>
                {`
                    li {
                        list-style: none;
                    }

                    .flex__container{
                        display: flex;
                        flex-wrap: wrap;
                    }

                    @media (max-width: 720px) {
                        #content {
                            padding: 0 1em 1em 1em;
                        }
                    }
                `}
            </style>
        </div>
    )
)

export default withNamespaces("showcase")(
    ({t}) => (
        <div>
            <Head>
                <title>{t('title')}</title>
                <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header page="showcase" title={t('title')} />
            <Showcase />
            <Footer />
            <Piwik page="showcase" />
        </div>
    )
)
