import Head from "next/head"
import { withNamespaces } from "react-i18next"

import Header from "components/Header"
import Partners from "components/Partners"
import Footer from "components/Footer"
import Piwik from "components/Piwik"


const Contribuer =  withNamespaces("contribute")(
    ({t}, props) => (
        <div className="content">
            <h2>{t('title-suggest')}</h2>
            <p>{t('content-suggest')}</p>

            <h2>{t('title-share')}</h2>
            <p>
                {t('content-share')}
                <a href="https://drive.google.com/open?id=1eGa4PphlDCSzhGSTFDhG6CGRafJi6cAj3vlD7wNw2NM">
                    {t('content-share-link')}
                </a>
            </p>

            <h2>{t('title-reuse')}</h2>
            <p>
                {t('content-share')}
                <a href="https://openfisca.org/doc/publishing.html">
                    {t('content-share-link')}
                </a>
            </p>

            <style jsx>
                {`
                    #iframe-container {
                      display: flex;
                      flex-direction: row;
                      justify-content: center;
                    }

                    a {
                      color: #6d69fb;
                    }
                `}
            </style>
        </div>
    )
)


export default withNamespaces("contribute")(({t}) => (
    <div>
        <Head>
            <title>{t('title')}</title>
            <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header page="contribute" title={t('title')} />
        <Contribuer />
        <Partners />
        <Footer />
        <Piwik page="contribute" />
    </div>
)
