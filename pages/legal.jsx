import Head from "next/head"
import { withNamespaces } from "react-i18next"

import Header from "components/Header"
import Footer from "components/Footer"
import Piwik from "components/Piwik"
import "styles/theme.scss"


const Legal = withNamespaces("legal")(
    ({t}, props) => (
        <div className="content">
            <h2>{t('director')}</h2>
            <p>
                {t('director-address-1')}
                <br />
                <a href="https://www.etalab.gouv.fr">{t('director-address-2')}</a>
                <br />
                {t('director-address-3')}
                <br />
                {t('director-address-4')}            
            </p>
    
            <h2>{t('host')}</h2>
            <p>
                {t('host-address-1')}
                <br />
                {t('host-address-2')}
                <br />
                {t('host-address-3')}
                <br />
            </p>
    
            <style jsx />
        </div>
    )
)

export default withNamespaces("legal")(
    ({t}) => (
        <div>
            <Head>
                <title>{t('title')}</title>
                <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header page="legal" title={t('title')} />
            <Legal />
            <Footer />
            <Piwik page="legal" />
        </div>
    )
)
