import Head from "next/head"
import { withNamespaces } from "react-i18next"

import Header from "components/Header"
import Footer from "components/Footer"
import Piwik from "components/Piwik"
import "styles/theme.scss"

const Start = () => (
    <div className="content">
        <style jsx>
            {`
                #iframe-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
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

export default withNamespaces()(
    ({t}) => (
        <div>
            <Head>
                <title>{t('start')}</title>
                <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header page="start" title={t('start')} />
            <Start />
            <Footer />
            <Piwik page="start" />
        </div>
    )
)
