import Head from 'next/head'
import GlobalStyle from '../components/GlobalStyle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Piwik from '../components/Piwik'
import { withNamespaces } from 'react-i18next';


const Legal =  withNamespaces("legal")(
    ({t}, props) => (
    <div className="content">
        <h2>{t('director')}</h2>
        <p>
            {t('director-address')}
        </p>

        <h2>{t('host')}</h2>
        <p>{t('host-address')}</p>
    </div>
    )
)

export default withNamespaces("legal")(({t}) => (
    <div>
        <Head>
            <title>{t('title')}</title>
            <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle/>
        <Header page="legal" title={t('title')}  />
        <Legal />
        <Footer />
        <Piwik page="legal"/>
    </div>
    )
)
