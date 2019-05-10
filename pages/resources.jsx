import { withNamespaces } from "react-i18next"
import Head from "next/head"

import Header from "components/Header"
import Footer from "components/Footer"
import Piwik from "components/Piwik"
import CardResources from "components/CardResources"
import CardResourcesmin from "components/CardResourcesmin"
import "styles/global.scss"


const Resources =  withNamespaces("resources")(
    ({t}, props) => (
        <div className="content">
            <ul className="flex__container">
                <li className="flex__item">
                    <CardResources
                        img="/static/icons/france.svg"
                        title={t('system-fr')}
                        desc={t('$t(content-fr) $t(desc-fr)')}
                        linkexplorer="https://fr.openfisca.org/legislation"
                        linkgit="https://github.com/openfisca/openfisca-france"
                    />
                </li>

                <li className="flex__item">
                    <CardResources
                        img="/static/icons/nz.svg"
                        title={t('system-nz')}
                        desc={t('desc-nz')}
                        linkexplorer="https://www.rules.nz"
                        linkgit="https://github.com/ServiceInnovationLab/openfisca-aotearoa"
                    />
                </li>

                <li className="flex__item">
                    <CardResourcesmin
                        img="/static/icons/barcelona.svg"
                        title={t('system-ba')}
                        desc={t('desc-ba')}
                        linkgit="https://github.com/lesmevesajudes/openfisca-barcelona"
                    />
                </li>
            </ul>

            <ul className="flex__container">
                <li className="flex__item">
                    <CardResourcesmin
                        img="/static/icons/tunisia.svg"
                        title={t('system-tn')}
                        desc={t('desc-tn')}
                        linkgit="https://github.com/openfisca/openfisca-tunisia"
                    />
                </li>

                <li className="flex__item">
                    <CardResourcesmin
                        img="/static/icons/italy.svg"
                        title={t('system-it')}
                        desc={t('desc-it')}
                        linkgit="https://github.com/openfisca/openfisca-italy"
                    />
                </li>

                <li className="flex__item">
                    <CardResourcesmin
                        img="/static/icons/senegal.svg"
                        title={t('system-sn')}
                        desc={t('desc-sn')}
                        linkgit="https://github.com/openfisca/openfisca-senegal"
                    />
                </li>
            </ul>

            <ul className="flex__container">
                <li className="flex__item">
                    <CardResourcesmin
                        img="/static/icons/galle.svg"
                        title={t('system-au')}
                        desc={t('desc-au')}
                        linkgit="https://github.com/digitalnsw/openfisca-nsw"
                    />
                </li>
            </ul>

            <style jsx>
                {`
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

export default withNamespaces("resources")(
    ({t}) => (
        <div>
            <Head>
                <title>{t('title')}</title>
                <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header page="resources" title={t('title')} />
            <Resources />
            <Footer />
            <Piwik page="resources" />
        </div>
    )
)
